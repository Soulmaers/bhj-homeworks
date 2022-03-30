

const subMenu = document.querySelectorAll('.menu_sub');

const arr = Array.from(subMenu);
arr.forEach(element => {
    elem = element.closest('.menu__item');
    subLink = elem.firstElementChild;
    subLink.onclick = function () {

        if (element.classList.contains('menu_active')) {
            arr.forEach(element => element.classList.remove('menu_active'));
            return false;
        }

        arr.forEach(element => element.classList.remove('menu_active'));

        if (element.classList.contains('menu_sub')) {
            element.classList.toggle('menu_active');
        }

        return false;
    }
});

