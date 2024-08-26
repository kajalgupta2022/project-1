document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText !== "") {
            addTodoItem(taskText);
            todoInput.value = '';
        }
    });

    function addTodoItem(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
