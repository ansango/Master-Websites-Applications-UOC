import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.state';

export const SHARED_STATE_NAME = 'shared';

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getErrorMessage = createSelector(getSharedState, (state) => {
  return state.errorMessage;
});

export const getSuccessMessage = createSelector(getSharedState, (state) => {
  return state.successMessage;
});
