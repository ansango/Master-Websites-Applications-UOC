import { createReducer, on } from '@ngrx/store';
import {
  loginSuccess,
  autoLogout,
  signUpSuccess,
  updateProfileSuccess,
} from './auth.actions';
import { initialState } from './auth.state';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      userType: action.user.userType,
    };
  }),
  on(signUpSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      userType: action.user.userType,
    };
  }),
  on(autoLogout, (state) => {
    return {
      ...state,
      user: null,
      userType: null,
    };
  }),
  on(updateProfileSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      userType: action.user.userType,
    };
  })
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
