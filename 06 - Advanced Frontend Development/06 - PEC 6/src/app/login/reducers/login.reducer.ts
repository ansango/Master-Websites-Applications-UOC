import { login, loginSuccess, loginFailure, logout } from '../actions';
import { createReducer, on } from '@ngrx/store';
import { Credentials } from '../models/credentials';

export interface LoginState {
    credentials: Credentials;
    loggedIn: boolean;
    error: string | null;
    pending: boolean;
}

export const initialState: LoginState = {
    credentials: null,
    loggedIn: false,
    error: null,
    pending: false
};

const _loginReducer = createReducer(
    initialState,
    on(login, (state) => ({
        ...state,
        loggedIn: false,
        error: null,
        pending: true,
    })),
    on(loginSuccess, (state, action) => ({
        ...state,
        credentials: action.credentials,
        loggedIn: true,
        error: null,
        pending: false,
    })),
    on(loginFailure, (state, { payload }) => ({
        ...state,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        },
        loggedIn: false,
        pending: false,
    })),
    on(logout, () => initialState)
  );


export function loginReducer(state, action) {
    return _loginReducer(state, action);
}
