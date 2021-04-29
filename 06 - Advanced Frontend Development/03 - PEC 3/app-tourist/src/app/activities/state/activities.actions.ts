import { createAction, props } from '@ngrx/store';
import { Activity, MyActivity } from 'src/app/models/activity';

export const LOAD_ACTIVITIES = '[activity page] load activities';
export const LOAD_ACTIVITIES_SUCCESS =
  '[activity page] load activities success';

export const LOAD_MYACTIVITIES = '[activity page] load my activities';
export const LOAD_MYACTIVITIES_SUCCESS =
  '[activity page] load my activities success';

export const LOAD_ACTIVITIES_ADMIN = '[activity page] load activities admin';
export const LOAD_ACTIVITIES_ADMIN_SUCCESS =
  '[activity page] load activities admin success';

export const ADD_ACTIVITY = '[activity page] add activity';
export const ADD_ACTIVITY_SUCCESS = '[activity page] add activity success';

export const UPDATE_ACTIVITY = '[activity page] update activity';
export const UPDATE_ACTIVITY_SUCCESS =
  '[activity page] update activity success';

export const DELETE_ACTIVITY = '[activity page] delete activity';
export const DELETE_ACTIVITY_SUCCESS =
  '[activity page] delete activity success';

export const ADD_SUBSCRIPTION = '[activity page] subscription activity';
export const ADD_SUBSCRIPTION_SUCCESS =
  '[activity page] subscription activity success';

export const DELETE_SUBSCRIPTION =
  '[activity page] delete subscription activity';
export const DELETE_SUBSCRIPTION_SUCCESS =
  '[activity page] delete susbcription activity success';

export const loadActivities = createAction(LOAD_ACTIVITIES);
export const loadActivitiesSuccess = createAction(
  LOAD_ACTIVITIES_SUCCESS,
  props<{ activities: Activity[] }>()
);

export const loadMyActivities = createAction(
  LOAD_MYACTIVITIES,
  props<{ idUser: number | undefined }>()
);
export const loadMyActivitiesSuccess = createAction(
  LOAD_MYACTIVITIES_SUCCESS,
  props<{ myActivities: Activity[] }>()
);

export const loadActivitiesAdmin = createAction(
  LOAD_ACTIVITIES_ADMIN,
  props<{ idUser: number | undefined }>()
);
export const loadActivitiesAdminSuccess = createAction(
  LOAD_ACTIVITIES_ADMIN_SUCCESS,
  props<{ activitiesAdmin: Activity[] }>()
);

export const addActivity = createAction(
  ADD_ACTIVITY,
  props<{ activity: Activity }>()
);
export const addActivitySuccess = createAction(
  ADD_ACTIVITY_SUCCESS,
  props<{ activity: Activity }>()
);

export const updateActivity = createAction(
  UPDATE_ACTIVITY,
  props<{ activity: Activity }>()
);

export const updateActivitySuccess = createAction(
  UPDATE_ACTIVITY_SUCCESS,
  props<{ activity: Activity }>()
);

export const deleteActivity = createAction(
  DELETE_ACTIVITY,
  props<{ id: number }>()
);

export const deleteActivitySuccess = createAction(
  DELETE_ACTIVITY_SUCCESS,
  props<{ id: number }>()
);

export const addSubscription = createAction(
  ADD_SUBSCRIPTION,
  props<{ id: number | undefined; idUser: number | undefined }>()
);

export const addSubscriptionSuccess = createAction(
  ADD_SUBSCRIPTION_SUCCESS,
  props<{ myActivity: Activity }>()
);

export const deleteSubscription = createAction(
  DELETE_SUBSCRIPTION,
  props<{ id: number | undefined; userId: number | undefined }>()
);

export const deleteSubscriptionSuccess = createAction(
  DELETE_SUBSCRIPTION_SUCCESS,
  props<{ myActivity: Activity }>()
);
