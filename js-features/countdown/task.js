
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

