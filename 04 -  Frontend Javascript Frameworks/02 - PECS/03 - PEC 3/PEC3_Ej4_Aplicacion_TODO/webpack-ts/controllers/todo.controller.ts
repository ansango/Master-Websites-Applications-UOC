import TodoService from "../services/todo.service";
import TodoView from "../views/todo.views";
import { Todos } from "../models/todo.model";

/**
* @class Controller
*
* Links the user input and the view output.
*
* @param model
* @param view
*/
export default class TodoController {
  constructor(private service: TodoService, private view: TodoView) {
    
    // Explicit this binding
    this.service.bindTodoListChanged((todos: Todos) => this.onTodoListChanged(todos));
    this.view.bindAddTodo((text: string) => this.handleAddTodo(text));
    this.view.bindEditTodo((id: string, text: string) => this.handleEditTodo(id, text));
    this.view.bindDeleteTodo((id: string) => this.handleDeleteTodo(id));
    this.view.bindToggleTodo((id: string) => this.handleToggleTodo(id));
    
    // Display initial todos
    this.onTodoListChanged(this.service.todos);
  }
    
  onTodoListChanged(todos: Todos): void {
    this.view.displayTodos(todos);
  }
  
  handleAddTodo(todoText: string): void {
    this.service.addTodo(todoText);
  }
  
  handleEditTodo(id: string, todoText: string): void {
    this.service.editTodo(id, todoText);
  }
  
  handleDeleteTodo(id: string): void {
    this.service.deleteTodo(id);
  }
  
  handleToggleTodo(id: string): void {
    this.service.toggleTodo(id);
  }
}
