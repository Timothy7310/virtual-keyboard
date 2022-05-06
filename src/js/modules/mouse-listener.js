import capsFunc from './caps-button';

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
    }));

    keys.forEach((key) => key.addEventListener('mouseup', (e) => {
        e.preventDefault();
        if (!key.classList.contains('CapsLock')) {
            key.classList.remove('active');
        }
    }));

    // document.querySelector('.CapsLock').addEventListener('click', capsFunc);
};

export default mouseListener;
