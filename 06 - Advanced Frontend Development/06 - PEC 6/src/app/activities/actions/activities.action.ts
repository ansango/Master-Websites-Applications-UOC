import {createAction, props} from '@ngrx/store';
import { Activity } from '../models/activity';

export const getAllActivities = createAction('[Activity] Get All Activities');
export const getAllActivitiesSuccess = createAction(
    '[Activity] Get All Activities Success',
    props<{ activities: Activity[] }>()
);
export const getAllActivitiesFailure = createAction(
    '[Activity] Get All Activities Failure',
    props<{ payload: any }>()
);
export const getUserActivities = createAction('[Activity] Get User Activities',
    props<{ idUser: number }>()
);
export const getUserActivitiesSuccess = createAction(
    '[Activity] Get User Activities Success',
    props<{ activities: Activity[], idUser: number }>()
);
export const getUserActivitiesFailure = createAction(
    '[Activity] Get User Activities Failure',
    props<{ payload: any }>()
);
export const getFavoriteUserActivities = createAction('[Activity] Get Favorite User Activities',
    props<{ idFavoriteUserActivities: number[] }>()
);
export const getFavoriteUserActivitiesSuccess = createAction(
    '[Activity] Get Favorite User Activities Success',
    props<{ activities: Activity[], idFavoriteUserActivities: number[] }>()
);

export const getFavoriteUserActivitiesFailure = createAction(
    '[Activity] Get Favorite User Activities Failure',
    props<{ payload: any }>()
);

export const updateActivity = createAction('[Activity] Update Activity',
    props<{ activity: Activity }>()
);
export const updateActivitySuccess = createAction('[Activity] Update Activity Success',
    props<{ activity: Activity }>()
);

export const updateActivityFailure = createAction(
    '[Activity] Update Activity Failure',
    props<{ payload: any }>()
);

export const signUpActivity = createAction('[Activity] Sign Up Activity',
    props<{ activity: Activity }>()
);
export const signUpActivitySuccess = createAction('[Activity] Sign Up Activity Success',
    props<{ activity: Activity }>()
);

export const signUpActivityFailure = createAction(
    '[Activity] Sign Up Activity Failure',
    props<{ payload: any }>()
);

export const unregisterActivity = createAction('[Activity] Unregister Activity',
    props<{ activity: Activity }>()
);
export const unregisterActivitySuccess = createAction('[Activity] Unregister Activity Success',
    props<{ activity: Activity }>()
);

export const unregisterActivityFailure = createAction(
    '[Activity] Unregister Activity Failure',
    props<{ payload: any }>()
);

export const getActivitiesAdmin = createAction('[Activity] Get Activities Admin',
    props<{ idUser: number }>()
);
export const getActivitiesAdminSuccess = createAction(
    '[Activity] Get Activities Admin Success',
    props<{ activities: Activity[], idUser: number }>()
);

export const getActivitiesAdminFailure = createAction(
    '[Activity] Get Activities Admin Failure',
    props<{ payload: any }>()
);

export const deleteActivity = createAction('[Activity] Delete Activity',
    props<{ activity: Activity }>()
);
export const deleteActivitySuccess = createAction('[Activity] Delete Activity Success',
    props<{ activity: Activity }>()
);

export const deleteActivityFailure = createAction(
    '[Activity] Delete Activity Failure',
    props<{ payload: any }>()
);

export const createActivity = createAction('[Activity] Create Activity',
    props<{ activity: Activity }>()
);
export const createActivitySuccess = createAction('[Activity] Create Activity Success',
    props<{ activity: Activity }>()
);

export const createActivityFailure = createAction(
    '[Activity] Create Activity Failure',
    props<{ payload: any }>()
);

