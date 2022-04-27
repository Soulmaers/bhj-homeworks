const poll = document.getElementById('poll__title');
const answer = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const response = xhr.response.data;
        render(response);
    }
});
const render = (el) => {
    const pool = el.title;
    const answerKey = el.answers;
    poll.innerText = pool;

    answerKey.forEach(element => {
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.innerText = element;
        answer.appendChild(button);
        button.addEventListener('click', () => {
            alert(`«Спасибо, ваш голос засчитан!»`);
        })
    });
}