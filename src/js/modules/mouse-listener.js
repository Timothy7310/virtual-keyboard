import capsFunc from './caps-button';
import shiftFunc from './shift-button';
import typingSymbols from './typing-symbols';

let isCaps = false;
let symbol;
const mouseListener = () => {
    const textarea = document.querySelector('.textarea');
    const keys = document.querySelectorAll('.keyboard-key');
    keys.forEach((key) => key.addEventListener('mousedown', (e) => {
        e.preventDefault();

        if (!key.classList.contains('CapsLock')) {
            key.classList.add('active');
        } else {
            capsFunc();
            isCaps = !isCaps;
        }

        if (e.target.closest('.ShiftLeft') || e.target.closest('.ShiftRight')) {
            shiftFunc();
        }

        if (e.target.classList.contains('keyboard-key')) {
            symbol = typingSymbols(e.target);
            if (
                e.target.closest('.CapsLock')
                || e.target.closest('.ShiftLeft')
                || e.target.closest('.ShiftRight')
                || e.target.closest('.Delete')
                || e.target.closest('.AltLeft')
                || e.target.closest('.AltRight')
                || e.target.closest('.ControlLeft')
                || e.target.closest('.ControlRight')
                || e.target.closest('.Backspace')
                || e.target.closest('.MetaLeft')
            ) {
                symbol = '';
            }
            if (e.target.closest('.Enter')) {
                symbol = '\n';
            }
            if (e.target.closest('.Tab')) {
                symbol = '\t';
            }
            if (e.target.closest('.Space')) {
                symbol = ' ';
            }
            textarea.innerHTML += symbol;

            if (e.target.closest('.Backspace')) {
                textarea.innerHTML = textarea.innerHTML.slice(0, -1);
            }
        } else {
            symbol = e.target.innerHTML;
            if (
                e.target.innerHTML === 'CapsLock'
                || e.target.innerHTML === 'Shift'
                || e.target.innerHTML === 'Del'
                || e.target.innerHTML === 'Alt'
                || e.target.innerHTML === 'Ctrl'
                || e.target.innerHTML === 'Backspace'
                || e.target.innerHTML === 'Win'
            ) {
                symbol = '';
            } else {
                symbol = e.target.innerHTML;
            }
            if (e.target.innerHTML === 'Enter') {
                symbol = '\n';
            }
            if (e.target.innerHTML === 'Tab') {
                symbol = '\t';
            }
            textarea.innerHTML += symbol;
            if (e.target.innerHTML === 'Backspace') {
                textarea.innerHTML = textarea.innerHTML.slice(0, -1);
            }
        }
    }));

    keys.forEach((key) => key.addEventListener('mouseup', (e) => {
        e.preventDefault();

        if (!key.classList.contains('CapsLock')) {
            key.classList.remove('active');
        }

        if (e.target.closest('.ShiftLeft') || e.target.closest('.ShiftRight')) {
            shiftFunc();
        }
    }));
};

export default mouseListener;
