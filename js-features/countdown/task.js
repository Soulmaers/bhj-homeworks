<<<<<<< HEAD
const timeId = document.getElementById("timer");
const changeTime = () => {
    timeId = timer.textContent--;
    if (timeId === 55) {
        clearInterval(changeTime);
        alert("Вы победили в конкурсе!");
    }

}
setInterval(changeTime, 1000);
=======

const value = document.getElementById('timer');
let timer = Number(value.textContent);
const countdown = () => {
    value.textContent = timer--;
    if (timer < 0) {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!');
    };
};
let timerId = setInterval(countdown, 1000);

>>>>>>> 7dd049f0adcf6439f808a2befe4cd90d0408951d
