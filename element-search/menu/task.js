let menuLink = document.querySelectorAll('.menu__link');
const arrMenulink = Array.from(menuLink);
for (let i = 0; i <= arrMenulink.length; i++) {
    arrMenulink[i].onclick = function () {
        const parent = arrMenulink[i].parentElement;
        const menuUp = parent.querySelector('.menu_sub');
        if (menuUp.className === 'menu menu_sub') {
            menuUp.classList.add('menu_active');
        } else {
            menuUp.classList.add('menu_sub');
        }
        if (arrMenulink[i].closest('.menu_main')) {
            return false
        }
    }
}