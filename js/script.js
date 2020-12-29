class TodoListApp {
  constructor() {
    // Select the todo-form
    this.todoForm = document.querySelector('.todo-form');
    // Select the todo input box
    this.todoInput = document.querySelector('.todo-input');
    // Select the todo items list
    this.todoItemsList = document.querySelector('.todo-items');

    // Initialize items list
    this.todos = [];

    // Add addTodo handler on submit button
    this.todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      this.addTodo(this.todoInput.value);
    }.bind(this));
  }
  // Add Todos to items list
  addTodo(item) {
    if (item !== '') {
      // Generate todo item
      const todo = {
        id: Date.now(),
        name: item,
        completed: false
      };

      // Add todo item to items list
      this.todos.push(todo);
      // Render the items list
      this.renderTodos(this.todos);

      // Clear input box
      this.todoInput.value = '';
    }
  }

  renderTodos(todos) {
    // Reset items list content
    this.todoItemsList.innerHTML = '';

    // Insert each item to DOM
    this.todos.forEach(function(item){
      const li = document.createElement('li');
      li.innerHTML = item.name
      this.todoItemsList.append(li);
    }.bind(this));
  }
}

// Run Todo list App
let app = new TodoListApp();
