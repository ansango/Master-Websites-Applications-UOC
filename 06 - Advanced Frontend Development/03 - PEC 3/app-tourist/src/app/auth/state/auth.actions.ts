import { createAction, props } from '@ngrx/store';
import { User, UserType } from 'src/app/models/user';

export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';

export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup success';
export const SIGNUP_FAIL = '[auth page] signup fail';

export const AUTO_LOGIN_ACTION = '[auth page] auto login';
export const AUTO_LOGOUT_ACTION = '[auth page] auto logout';

export const UPDATE_PROFILE_START = '[profile page] update profile start';
export const UPDATE_PROFILE_SUCCESS = '[profile page] update profile success';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User; userType: UserType | null; redirect: boolean }>()
);

export const loginFail = createAction(LOGIN_FAIL);

export const signUpStart = createAction(
  SIGNUP_START,
  props<{
    user: User;
  }>()
);

export const signUpSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{
    user: User;
    userType: UserType | null;
    userId: number | undefined;
    redirect: boolean;
  }>()
);

export const signUpFail = createAction(SIGNUP_FAIL);

export const autoLogin = createAction(AUTO_LOGIN_ACTION);
export const autoLogout = createAction(AUTO_LOGOUT_ACTION);

export const updateProfileStart = createAction(
  UPDATE_PROFILE_START,
  props<{
    user: User;
  }>()
);

export const updateProfileSuccess = createAction(
  UPDATE_PROFILE_SUCCESS,
  props<{
    user: User;
  }>()
);
