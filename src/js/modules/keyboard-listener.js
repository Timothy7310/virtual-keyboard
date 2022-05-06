import changeLang from './change-language';

let isEng = false;

const keyboardListener = () => {
    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        document.querySelector(`.${e.code}`).classList.add('active');

        if ((e.ctrlKey || e.metaKey) && e.altKey) {
            changeLang();
            isEng = !isEng;
        }
    });

    document.addEventListener('keyup', (e) => {
        e.preventDefault();
        document.querySelector(`.${e.code}`).classList.remove('active');
    });
};

export default keyboardListener;
