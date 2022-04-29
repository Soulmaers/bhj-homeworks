
const signinForm = document.forms['signin__form'];
const signin = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');

function welcomeResp(elem) {
    document.getElementById('user_id').textContent = elem
    signin.classList.toggle('signin_active');
    welcome.classList.toggle('welcome_active');
}
if (localStorage.getItem('userId')) {
    welcomeResp(localStorage.getItem('userId'));
}

signinForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == xhr.DONE) {
            const responce = JSON.parse(xhr.response);
            if (responce.success) {
                localStorage.setItem('userId', responce['user_id'])
                welcomeResp(responce['user_id']);
            }
        } else {
            alert('Неверный логин/пароль');
        }
    })
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(new FormData(signinForm));
})
