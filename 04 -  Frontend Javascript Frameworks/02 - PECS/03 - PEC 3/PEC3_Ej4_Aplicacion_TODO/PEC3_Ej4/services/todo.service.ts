import { Todo } from "../models/todo.model";
/**
 * @class Service
 *
 * Manages the data of the application.
 */
export class TodoService {
  todos: Todo[];
  onTodoListChanged: (todos: Todo[]) => void;
  constructor() {
    this.todos = (JSON.parse(localStorage.getItem("todos")) || []).map(
      (todo: Todo) => new Todo(todo)
    );
  }

  bindTodoListChanged(callback: (todos: Todo[]) => void) {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string) {
    this.todos.push(new Todo({ text }));
    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string) {
    this.todos = this.todos.map((todo: Todo) =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText,
          })
        : todo
    );
    this._commit(this.todos);
  }
  deleteTodo(_id: string) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }
  toggleTodo(_id: string) {
    this.todos = this.todos.map((todo: Todo) =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );
    this._commit(this.todos);
  }
}
