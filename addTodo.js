let todo = [];
const storeTodo = str => todo.push(str);
const userInput = document.querySelector('.todo-input');
const todoUl = document.querySelector('.todo-list');

document.querySelector('.add-todo').addEventListener('click', function() {
    storeTodo(userInput.value);
    todoUl.appendChild(document.createElement('li')).innerText = userInput.value;
    userInput.value = '';
})
