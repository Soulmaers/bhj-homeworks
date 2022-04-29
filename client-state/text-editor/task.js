const edit = document.getElementById('editor');
const btn = document.getElementById('btn');

edit.addEventListener('input', () => {
    localStorage.setItem('key', edit.value)
})
edit.value = localStorage.getItem('key');

btn.addEventListener('click', () => {
    localStorage.clear();
    edit.value = '';
})


