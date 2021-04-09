import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const AUTH_STATE_NAME = 'auth';

export const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
  return state.user ? true : false;
});

export const getUser = createSelector(getAuthState, (state) => {
  return state.user!;
});

export const getUserId = createSelector(getAuthState, (state) => {
  return state.user?.id!;
});

export const getUserType = createSelector(getAuthState, (state) => {
  return state.userType;
});
