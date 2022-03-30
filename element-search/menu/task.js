

const subMenu = document.querySelectorAll('.menu_sub');//нашел все подменю которые открываются и закрываются


const arr = Array.from(subMenu);
arr.forEach(element => {
    elem = element.closest('.menu__item');//нашел внешний элемент списка
    subLink = elem.firstElementChild; //внутри элемента списка нашел ссылку
    subLink.onclick = function () { //добавляем обработчик события только для ссылок у которых есть подменю
        menuLink = document.querySelector('.menu__link'); //внутри обработчика ссылка по которой клик
        if (this.nextElementSibling.classList.contains('menu_sub')) {// если подменю которое находится рядом содержит класс ('menu_sub')
            menuActive = this.nextElementSibling.classList.contains('menu_active');// то ищем открытое подменю
        } if (!menuActive) {// если открытого подменю нет
            this.nextElementSibling.classList.add('menu_active');//то добавляем открытое подменю
        } if (menuActive) { //если активное меню есть
            this.nextElementSibling.classList.remote('menu_active');//то удаляем открытое подменю
        }
    }
    return false;
})

