import { Todo, Todos } from "../models/todo.model";
/**
 * @class View
 *
 * Visual representation of the model.
 */
export class TodoView {
  app: HTMLElement;
  form: HTMLElement;
  input: HTMLInputElement;
  submitButton: HTMLButtonElement;
  title: HTMLElement;
  todoList: HTMLElement;
  private _temporaryTodoText: string;

  constructor() {
    this.app = this.getElement("#root");
    this.form = this.createElement("form");
    this.input = this.createElement("input") as HTMLInputElement;
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";
    this.submitButton = this.createElement("button") as HTMLButtonElement;
    this.submitButton.textContent = "Submit";
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement("h1");
    this.title.textContent = "Todos";
    this.todoList = this.createElement("ul", "todo-list");
    this.app.append(this.title, this.form, this.todoList);

    this._temporaryTodoText = "";
    this._initLocalListeners();
  }

  private get _todoText() {
    return this.input.value;
  }

  private _resetInput() {
    this.input.value = "";
  }

  getElement(selector: string) {
    const element: HTMLElement = document.querySelector(selector);
    return element;
  }
  createElement(tag: string, className?: string) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  displayTodos(todos: Todos) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Show default message
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create nodes
      todos.forEach((todo) => {
        const li = this.createElement("li");
        li.id = todo.id;

        const checkbox = this.createElement("input") as HTMLInputElement;
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        const span = this.createElement("span") as HTMLSpanElement;
        span.contentEditable = "true";
        span.classList.add("editable");

        if (todo.complete) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        // Append nodes
        this.todoList.append(li);
      });
    }

    // Debugging
    console.log(todos);
  }

  private _initLocalListeners() {
    this.todoList.addEventListener(
      "input",
      (event: Event & { target: EventTarget & HTMLElement }) => {
        if (event.target.className === "editable") {
          this._temporaryTodoText = event.target.innerText;
        }
      }
    );
  }

  bindAddTodo(handler: (text: any) => void) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }
  bindEditTodo(handler: (id: any, text: any) => void) {
    this.todoList.addEventListener(
      "focusout",
      (event: Event & { target: EventTarget & HTMLElement }) => {
        if (this._temporaryTodoText) {
          const id = event.target.parentElement.id;

          handler(id, this._temporaryTodoText);
          this._temporaryTodoText = "";
        }
      }
    );
  }
  bindDeleteTodo(handler: (id: any) => void) {
    this.todoList.addEventListener(
      "click",
      (event: Event & { target: EventTarget & HTMLElement }) => {
        if (event.target.className === "delete") {
          const id = event.target.parentElement.id;

          handler(id);
        }
      }
    );
  }
  bindToggleTodo(handler: (id: any) => void) {
    this.todoList.addEventListener(
      "change",
      (event: Event & { target: EventTarget & HTMLInputElement }) => {
        if (event.target.type === "checkbox") {
          const id = event.target.parentElement.id;

          handler(id);
        }
      }
    );
  }
}
