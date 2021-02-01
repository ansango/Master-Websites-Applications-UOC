/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class TodoController {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Display initial todos
    this.onTodoListChanged(this.service.todos);
  }

  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = todoText => {
    this.service.addTodo(todoText);
  };

  handleEditTodo = (id, todoText) => {
    this.service.editTodo(id, todoText);
  };

  handleDeleteTodo = id => {
    this.service.deleteTodo(id);
  };

  handleToggleTodo = id => {
    this.service.toggleTodo(id);
  };
}
