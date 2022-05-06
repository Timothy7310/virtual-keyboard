import changeLang from './change-language';
import capsFunc from './caps-button';

let isEng = false;
let isDown = false;
let isCaps = false;

const keyboardListener = () => {
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
    });
};

export default keyboardListener;
