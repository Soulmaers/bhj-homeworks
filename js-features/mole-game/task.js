const lost = document.getElementById('lost');
const dead = document.getElementById('dead');

const reset = () => {
    lost.textContent = 0;
    dead.textContent = 0;
}

const getHole = (index) => {
    const element = document.getElementById(`hole${index}`)
    return element;
}

for (let i = 1; i <= 9; i++) {
    let element = getHole(i);
    element.onclick = () => {
        if (element.classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        } if (dead.textContent == 10) {
            alert('Победа');
            reset();
        } if (lost.textContent == 5) {
            alert('Вы проиграли');
            reset();
        }
    }
}




