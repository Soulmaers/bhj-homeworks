const timeId = document.getElementById("timer");
const changeTime = () => {
    timeId = timer.textContent--;
    if (timeId === 55) {
        clearInterval(changeTime);
        alert("Вы победили в конкурсе!");
    }

}
setInterval(changeTime, 1000);
