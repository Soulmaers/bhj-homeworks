const modalMain = document.getElementById('modal_main');
const closed = document.getElementsByClassName('modal__close');
modalMain.classList.add('modal_active');
closed[0].onclick = () => {
    modalMain.classList.remove('modal_active');
}
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.getElementsByClassName('show-success');
showSuccess[0].onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}
closed[2].onclick = () => {
    modalSuccess.classList.remove('modal_active');
}

