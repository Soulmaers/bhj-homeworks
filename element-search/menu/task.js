let menuLink = document.querySelectorAll('.menu__link');

for (let i of menuLink) {
    i.onclick = function () {
        let menuActive = document.querySelector('.menu_active');
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




