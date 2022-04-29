
const modalSub = document.getElementById('subscribe-modal');

const closeModal = (e) => {
    if (e.target.classList.contains('modal__close')) {
        modalSub.classList.remove('modal_active');
        document.cookie = 'modalclose=close';
    }
}
modalSub.addEventListener('click', closeModal);

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}


if (getCookie('modalclose')) {
    modalSub.classList.remove('modal_active');
    modalSub.removeEventListener('click', closeModal);
} else {
    modalSub.classList.add('modal_active');
}



