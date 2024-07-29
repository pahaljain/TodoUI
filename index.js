let todos = JSON.parse(localStorage.getItem('todos')) || [];

function onSubmit() {
    const getTodo = document.getElementsByClassName("todo_input")[0].value.trim();
    if (getTodo === '') return;
    
    document.getElementsByClassName("todo_input")[0].value = "";
    todos.push(getTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    addTodo(getTodo);
}

document.addEventListener('DOMContentLoaded', () => {
    todos.forEach(todo => {
        addTodo(todo);
    });
});

function addTodo(todo) {
    const ul = document.getElementsByClassName("todo_list")[0];
    let li = document.createElement('li');

    li.innerHTML = `
        <p>${todo}</p>
        <button class="delete">Remove</button>
    `;

    ul.appendChild(li);
    li.querySelector('.delete').addEventListener("click", () => deleteTodo(todo, li));
}

function deleteTodo(todo, item) {
    const index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        item.remove();
    }
}

document.getElementById('submitTodo').addEventListener('click', onSubmit);