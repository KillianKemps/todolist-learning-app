// Select the todo-form
const todoForm = document.querySelector('.todo-form');
// Select the todo input box
const todoInput = document.querySelector('.todo-input');
// Select the todo items list
const todoItemsList = document.querySelector('.todo-items');

let todos = [];

// Add addTodo handler on submit button
todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  addTodo(todoInput.value);
});

// Add Todos to items list
function addTodo(item) {
  if (item !== '') {
    // Generate todo item
    const todo = {
      id: Date.now(),
      name: item,
      completed: false
    };

    // Add todo item to items list
    todos.push(todo);
    // Render the items list
    renderTodos(todos);

    // Clear input box
    todoInput.value = '';
  }
}

function renderTodos(todos) {
  // Reset items list content
  todoItemsList.innerHTML = '';

  // Insert each item to DOM
  todos.forEach(function(item){
    const li = document.createElement('li');
    li.innerHTML = item.name
    todoItemsList.append(li);
  });
}
