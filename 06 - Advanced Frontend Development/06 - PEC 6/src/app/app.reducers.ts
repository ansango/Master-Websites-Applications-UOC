
import { ActionReducerMap } from '@ngrx/store';
import * as reducersActivity from './activities/reducers';
import * as reducersLogin from './login/reducers';
import * as reducersUser from './profile/reducers';
import { routerReducer } from '@ngrx/router-store';
import * as fromRouter from '@ngrx/router-store';
import { ActivitiesEffects } from './activities/effects';
import { LoginEffects } from './login/effects';
import { UserEffects } from './profile/effects';

export interface AppState {
    activities: reducersActivity.ActivityListState;
    login: reducersLogin.LoginState;
    user: reducersUser.UserState;
    router: fromRouter.RouterReducerState<any>;
}

export const appReducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    activities: reducersActivity.activitiesReducer,
    login: reducersLogin.loginReducer,
    user: reducersUser.userReducer
};

export const EffectsArray: any[] = [LoginEffects, ActivitiesEffects, UserEffects];
