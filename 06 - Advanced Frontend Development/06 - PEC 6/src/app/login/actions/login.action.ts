import {createAction, props} from '@ngrx/store';
import { Credentials } from '../models/credentials';

export const login = createAction(
    '[Login Page] Login',
    props<{ credentials: Credentials }>()
  );

export const loginSuccess = createAction(
    '[Login Page] Login Success',
    props<{ credentials: any }>()
);

export const loginFailure = createAction(
    '[Login Page] Login Failure',
    props<{ payload: any }>()
);

export const loginRedirect = createAction('[Login] Login Redirect');

export const logout = createAction('[Login] Logout');
export const logoutConfirmation = createAction('[Login] Logout Confirmation');
