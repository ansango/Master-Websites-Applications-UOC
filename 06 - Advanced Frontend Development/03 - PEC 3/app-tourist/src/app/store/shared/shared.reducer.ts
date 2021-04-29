import { createReducer, on } from '@ngrx/store';
import {
  setErrorMessage,
  setLoadingSkeleton,
  setLoadingSpinner,
  setSuccessMessage,
} from './shared.actions';
import { initialState } from './shared.state';

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showSpinner: action.status,
    };
  }),
  on(setLoadingSkeleton, (state, action) => {
    return {
      ...state,
      showSkeleton: action.status,
    };
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  }),
  on(setSuccessMessage, (state, action) => {
    return {
      ...state,
      successMessage: action.message,
    };
  })
);

export function sharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
