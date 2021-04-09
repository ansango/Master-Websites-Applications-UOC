import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import {
  completeAllTodos,
  createTodo,
  deleteTodosCompleted,
  getAllTodos,
} from '../actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  titleInput: FormControl;
  todos: Todo[] = [];

  constructor(private store: Store<AppState>) {
    this.titleInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
    this.store.select('todosApp').subscribe((todosResponse) => {
      this.todos = todosResponse.todos;
    });
    this.store.dispatch(getAllTodos());
  }

  addTodoTask(): void {
    if (this.titleInput.valid) {
      this.store.dispatch(createTodo({ title: this.titleInput.value }));
      this.titleInput.reset();
    }
  }

  completeAllTodos(): void {
    this.store.dispatch(completeAllTodos({ todos: this.todos }));
  }

  deleteAllCompletedTodos(): void {
    this.store.dispatch(deleteTodosCompleted({ todos: this.todos }));
  }
}
