import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { getAllTodos } from '../actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('todosApp').subscribe((todosResponse) => {
      this.todos = todosResponse.todos;
    });
    this.store.dispatch(getAllTodos());
  }
}
