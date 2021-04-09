import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getAllTodos, getAllTodosError, getAllTodosSuccess } from '../actions';
import { TodoService } from '../services/todo.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosService: TodoService) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllTodos),
      mergeMap(() =>
        this.todosService.getAllTodos().pipe(
          map((todos) => getAllTodosSuccess({ todos: todos })),
          catchError((err) => of(getAllTodosError({ payload: err })))
        )
      )
    )
  );
}
