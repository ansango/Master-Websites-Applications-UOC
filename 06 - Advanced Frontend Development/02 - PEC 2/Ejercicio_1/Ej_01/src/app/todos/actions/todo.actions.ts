import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const createTodo = createAction(
  '[TODO] Create todo',
  props<{ title: string }>()
);

export const completeTodo = createAction(
  '[TODO] Complete todo',
  props<{ id: number }>()
);

export const completeAllTodos = createAction(
  '[TODOS] Complete all todos',
  props<{ todos: Todo[] }>()
);

export const editTodo = createAction(
  '[TODO] Edit todo',
  props<{ id: number; title: string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete todo',
  props<{ id: number }>()
);

export const deleteTodosCompleted = createAction(
  '[TODOS] Delete completed todos',
  props<{ todos: Todo[] }>()
);

export const getAllTodos = createAction('[TODOS] Get all');

export const getAllTodosSuccess = createAction(
  '[TODOS] Get all success',
  props<{ todos: Todo[] }>()
);
export const getAllTodosError = createAction(
  '[TODOS] Get all error',
  props<{ payload: any }>()
);
