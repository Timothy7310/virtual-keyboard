import changeLang from './change-language';
import capsFunc from './caps-button';
import shiftFunc from './shift-button';
import typingSymbols from './typing-symbols';

let isEng = false;
let isDown = false;
let isCaps = false;
let symbol;

const keyboardListener = () => {
    const textarea = document.querySelector('.textarea');
    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        if (e.code !== 'CapsLock') {
            document.querySelector(`.${e.code}`).classList.add('active');
        }

        if ((e.ctrlKey || e.metaKey) && e.altKey) {
            changeLang();
            isEng = !isEng;
        }

        if (e.code === 'CapsLock' && !isDown) {
            capsFunc();
            isDown = true;
            isCaps = !isCaps;
        }

        if ((!isDown && e.code === 'ShiftLeft') || (!isDown && e.code === 'ShiftRight')) {
            shiftFunc();
            isDown = true;
        }

        symbol = typingSymbols(document.querySelector(`.${e.code}`));

        if (
            e.code === 'CapsLock'
            || e.code === 'ShiftLeft'
            || e.code === 'ShiftRight'
            || e.code === 'Delete'
            || e.code === 'Backspace'
            || e.altKey
            || e.ctrlKey
            || e.metaKey
        ) {
            symbol = '';
        }
        if (e.code === 'Enter') {
            symbol = '\n';
        }
        if (e.code === 'Space') {
            symbol = ' ';
        }
        if (e.code === 'Tab') {
            symbol = '\t';
        }
        textarea.innerHTML += symbol;
        if (e.code === 'Backspace') {
            textarea.innerHTML = textarea.innerHTML.slice(0, -1);
        }
    });

    document.addEventListener('keyup', (e) => {
        e.preventDefault();
        if (e.code !== 'CapsLock') {
            document.querySelector(`.${e.code}`).classList.remove('active');
        }

        if (e.code === 'CapsLock' && isDown) {
            isDown = false;
            isCaps = false;
        }

        if ((isDown && e.code === 'ShiftLeft') || (isDown && e.code === 'ShiftRight')) {
            shiftFunc();
            isDown = false;
        }
    });
};

export default keyboardListener;
