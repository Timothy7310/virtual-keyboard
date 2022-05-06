import capsFunc from './caps-button';
import shiftFunc from './shift-button';

let isCaps = false;
const mouseListener = () => {
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
