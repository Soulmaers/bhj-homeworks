let menuLink = document.querySelectorAll('.menu__link');
let menuActive = document.querySelector('.menu_active');
for (let i of menuLink) {
    i.onclick = function () {
        if (menuActive !== null) {
            menuActive.classList.toggle('menu_active');
            if (this.nextElementSibling)
                return false;
        }
        if (menuActive !== this.nextElementSibling) {
            this.nextElementSibling.classList.toggle('menu_active');
            return false;
        }
    }
}




