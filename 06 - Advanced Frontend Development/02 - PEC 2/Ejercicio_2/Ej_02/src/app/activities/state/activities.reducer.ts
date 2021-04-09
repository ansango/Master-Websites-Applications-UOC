import { createReducer, on } from '@ngrx/store';
import {
  addActivitySuccess,
  addSubscriptionSuccess,
  deleteActivitySuccess,
  deleteSubscriptionSuccess,
  loadActivitiesAdminSuccess,
  loadActivitiesSuccess,
  loadMyActivitiesSuccess,
  updateActivitySuccess,
} from './activities.actions';
import { initialState } from './activities.state';

const _activitiesReducer = createReducer(
  initialState,
  on(loadActivitiesSuccess, (state, action) => {
    return {
      ...state,
      activities: action.activities,
    };
  }),
  on(loadActivitiesAdminSuccess, (state, action) => {
    return {
      ...state,
      activitiesAdmin: action.activitiesAdmin,
    };
  }),
  on(loadMyActivitiesSuccess, (state, action) => {
    return {
      ...state,
      myActivities: action.myActivities,
    };
  }),
  on(addActivitySuccess, (state, action) => {
    let activity = { ...action.activity };
    return {
      ...state,
      activities: [...state.activities, activity],
      activitiesAdmin: [...state.activitiesAdmin, activity],
    };
  }),
  on(updateActivitySuccess, (state, action) => {
    const updateActivities = state.activitiesAdmin.map((activity) => {
      return action.activity.id === activity.id ? action.activity : activity;
    });

    return {
      ...state,
      activities: updateActivities,
      activitiesAdmin: updateActivities,
    };
  }),
  on(deleteActivitySuccess, (state, { id }) => {
    const activitiesAdmin = state.activitiesAdmin.filter((activity) => {
      return activity.id !== id;
    });
    const activities = state.activities.filter((activity) => {
      return activity.id !== id;
    });
    return {
      ...state,
      activities: activities,
      activitiesAdmin: activitiesAdmin,
    };
  }),
  on(addSubscriptionSuccess, (state, { myActivity }) => {
    let activities = state.activities.map((a) => {
      if (a.id == myActivity.id) {
        return myActivity;
      }
      return a;
    });
    return {
      ...state,
      myActivities: [...state.myActivities, myActivity],
      activities: [...activities],
    };
  }),
  on(deleteSubscriptionSuccess, (state, { myActivity }) => {
    const myActivities = state.myActivities.filter((activity) => {
      return activity.id !== myActivity.id;
    });
    let activities = state.activities.map((a) => {
      if (a.id == myActivity.id) {
        return myActivity;
      }
      return a;
    });
    return { ...state, myActivities: myActivities };
  })
);
export function activitiesReducer(state: any, action: any) {
  return _activitiesReducer(state, action);
}
