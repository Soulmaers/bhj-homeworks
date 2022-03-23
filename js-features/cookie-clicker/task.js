

const value = document.getElementById('clicker__counter');
const click = document.getElementById('cookie');
let count = Number(value.textContent);
click.onclick = () => {
    value.textContent = count += 1;
    if (value.textContent % 2 !== 0) {
        click.width = 160;
        click.heigth = 160;
    } else {
        click.width = 200;
    }

}

