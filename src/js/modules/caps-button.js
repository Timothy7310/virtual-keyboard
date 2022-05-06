const capsFunc = () => {
    document.querySelector('.CapsLock').classList.toggle('active');
    document.querySelectorAll('.caseDown').forEach((item) => item.classList.toggle('hidden'));
    document.querySelectorAll('.caps').forEach((item) => item.classList.toggle('hidden'));
};

export default capsFunc;
