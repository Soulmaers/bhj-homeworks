
const taskInput = document.getElementById('task__input');
taskInput.value = '';
const taskList = document.querySelector('.tasks__list');
const tasksAdd = document.querySelector('.tasks__add');

tasksAdd.addEventListener('click', func);




function func() {

    if (taskInput.value === 0) {
        return false
    }
    let container = document.createElement('div');
    container.classList.add('task');
    let discription = document.createElement('div');
    discription.classList.add('task__title');
    discription.innerHTML = taskInput.value;

    let href = document.createElement('a');
    container.appendChild(discription);
    container.appendChild(href);
    taskList.appendChild(container);
    href.outerHTML = '<a href="#" class="task__remove">&times;</a>';
    taskInput.value = '';
    href.onclick = removeFunc;

    console.log(href);

}

function removeFunc(event) {
    event.parentNode.remove();
}



/*let removerOnClick = function (event) {
    event.parentNode.remove();
};

const task = document.querySelector('#task__input');
task.value = '';
document.querySelector('#tasks__add').onclick = function () {

    if (task.value.length == 0) {
        return false;
    }
    let container = document.createElement('div');
    container.classList.add('task');

    let discription = document.createElement('div');
    discription.classList.add('task__title');
    discription.innerHTML = task.value;

    let remover = document.createElement('a');
    container.appendChild(discription);
    container.appendChild(remover);

    document.querySelector('#tasks__list').appendChild(container);
    remover.outerHTML = '<a onclick="removerOnClick(this)" href="#" class="task__remove">&times;</a>';
    task.value = '';

    return false;
};*/
