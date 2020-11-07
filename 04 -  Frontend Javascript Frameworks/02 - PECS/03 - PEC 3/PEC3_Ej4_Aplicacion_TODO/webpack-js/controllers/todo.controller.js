/**
* @class Controller
*
* Links the user input and the view output.
*
* @param model
* @param view
*/
export default class TodoController {
  constructor(service, view) {
    this.service = service;
    this.view = view;
    
    this.onTodoListChanged = todos => {
      this.view.displayTodos(todos);
    };
    
    this.handleAddTodo = todoText => {
      this.service.addTodo(todoText);
    };
    
    this.handleEditTodo = (id, todoText) => {
      this.service.editTodo(id, todoText);
    };
    
    this.handleDeleteTodo = id => {
      this.service.deleteTodo(id);
    };
    
    this.handleToggleTodo = id => {
      this.service.toggleTodo(id);
    };
    
    // Explicit this binding
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);
    
    // Display initial todos
    this.onTodoListChanged(this.service.todos);
  }
}
