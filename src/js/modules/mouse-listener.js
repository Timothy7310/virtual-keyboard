const mouseListener = () => {
    const keys = document.querySelectorAll('.keyboard-key');
    keys.forEach((key) => key.addEventListener('mousedown', (e) => {
        e.preventDefault();
        key.classList.add('active');
    }));

    keys.forEach((key) => key.addEventListener('mouseup', (e) => {
        e.preventDefault();
        key.classList.remove('active');
    }));
};

export default mouseListener;
