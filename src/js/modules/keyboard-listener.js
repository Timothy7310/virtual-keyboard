const keyboardListener = () => {
    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        document.querySelector(`.${e.code}`).classList.add('active');
    });

    document.addEventListener('keyup', (e) => {
        e.preventDefault();
        document.querySelector(`.${e.code}`).classList.remove('active');
    });
};

export default keyboardListener;
