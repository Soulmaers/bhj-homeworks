
const taskInput = document.getElementById('task__input');
const taskAdd = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

taskAdd.addEventListener('click', (event) => {
    event.preventDefault();
    if (taskInput.value.trim(length > 0)) {
        const container = document.createElement('div');
        container.classList.add('task');

        container.innerHTML = `
      <div class="task__title">
        ${taskInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    `;
        taskList.appendChild(container);
        const removeLink = container.querySelector('.task__remove');
        removeLink.addEventListener('click', (el) => {
            el.target.closest('.task').remove()
        });
        taskInput.value = '';
    } else {
        return false
    }
});