const send = document.getElementById('send');
const progress = document.getElementById('progress');


send.addEventListener('click', (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('post', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.onprogress = (el) => {
        progress.value = el.loaded / 100000000;
    };
    xhr.send();
    xhr.responseType = 'json';
});