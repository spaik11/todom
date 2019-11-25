const deleteTodo = index => todo.splice(index, 1);
const indexInput = document.querySelector('.index-input');

document.querySelector('.remove-todo').addEventListener('click', function() {
    deleteTodo(indexInput.value, 1);
    todoUl.removeChild(todoUl.childNodes[indexInput.value]);
    indexInput.value = '';
})