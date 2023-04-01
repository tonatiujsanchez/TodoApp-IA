const taskInput = document.getElementById('input-task');
const btnAddTask = document.getElementById('btn-add-task');
const taskList = document.getElementById('task-list');

btnAddTask.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<span class="task">${taskText}</span><button class="btn-delete">Eliminar</button>`;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-delete')) {
    event.target.parentNode.remove();
  }
});
