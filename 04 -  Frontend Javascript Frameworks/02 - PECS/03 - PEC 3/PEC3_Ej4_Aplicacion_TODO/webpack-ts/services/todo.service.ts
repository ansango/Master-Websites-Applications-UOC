import Todo, { TodoLike, Todos } from '../models/todo.model';
/**
 * @class Service
 *
 * Manages the data of the application.
 */
export default class TodoService {
  todos: Todos;
  onTodoListChanged: TodoListChangedFn;
  constructor() {
    const storageTodos: TodoLike[] = JSON.parse(localStorage.getItem("todos")) || [];
    this.todos = storageTodos.map((todo: TodoLike) => new Todo(todo.text, todo.complete, todo.id));
  }

  bindTodoListChanged(callback: TodoListChangedFn) {
    this.onTodoListChanged = callback;
  }

  private _commit(todos: Todos) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string) {
    this.todos.push(new Todo(text));
    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string) {
    this.todos = this.todos.map((todo: Todo) =>
      todo.id === id
        ? new Todo(updatedText)
        : todo
    );
    this._commit(this.todos);
  }

  deleteTodo(_id: string) {
    this.todos = this.todos.filter(({ id }: Todo) => id !== _id);
    this._commit(this.todos);
  }

  toggleTodo(_id: string) {
    this.todos = this.todos.map((todo: Todo) =>
      todo.id === _id ? new Todo(todo.text, !todo.complete) : todo
    );
    this._commit(this.todos);
  }
}


export type TodoListChangedFn = (todos: Todo[]) => void;