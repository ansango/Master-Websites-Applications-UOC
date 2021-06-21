import { getAllActivities, getAllActivitiesSuccess, getAllActivitiesFailure,
        getUserActivities, getUserActivitiesSuccess, getUserActivitiesFailure,
        getFavoriteUserActivities, getFavoriteUserActivitiesSuccess, getFavoriteUserActivitiesFailure,
        updateActivity, updateActivitySuccess, updateActivityFailure,
        getActivitiesAdmin, getActivitiesAdminSuccess, getActivitiesAdminFailure,
        deleteActivity, deleteActivitySuccess, deleteActivityFailure,
        createActivity, createActivitySuccess, createActivityFailure,
        signUpActivity, signUpActivitySuccess, signUpActivityFailure,
        unregisterActivity, unregisterActivitySuccess, unregisterActivityFailure} from '../actions';
import { createReducer, on } from '@ngrx/store';
import { Activity } from '../models/activity';

export interface ActivityListState {
    activity: Activity [];
    error: string | null;
    pending: boolean;
}

export const initialState: ActivityListState = {
    activity: null,
    error: null,
    pending: false
};

const _activitiesReducer = createReducer(
    initialState,
    on(getAllActivities, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(getAllActivitiesSuccess, (state, action) => ({
        ...state,
        activity: [...action.activities],
        error: null,
        pending: false,
    })),
    on(getAllActivitiesFailure, (state, { payload }) => ({
        ...state,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        },
        pending: false,
    })),
    on(getUserActivities, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(getUserActivitiesSuccess, (state, action) => ({
        ...state,
        activity: [...action.activities.filter(x => x.signUpUsers.includes(action.idUser))],
        error: null,
        pending: false,
    })),
    on(getUserActivitiesFailure, (state, { payload }) => ({
        ...state,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        },
        pending: false,
    })),
    on(getFavoriteUserActivities, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(getFavoriteUserActivitiesSuccess, (state, action) => ({
        ...state,
        activity: [...action.activities.filter(x => x.id === (action.idFavoriteUserActivities.find(y => y === x.id)))],
        error: null,
        pending: false,
    })),
    on(getFavoriteUserActivitiesFailure, (state, { payload }) => ({
        ...state,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        },
        pending: false,
    })),
    on(updateActivity, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(updateActivitySuccess, (state, action) => ({
        ...state,
        activity: state.activity.map(a => {
            if (a.id === action.activity.id) {
                return { ...a, ...action.activity };
            } else {
                return a;
            }
        }),
        error: null,
        pending: false,
    })),
    on(updateActivityFailure, (state, { payload }) => ({
        ...state,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        },
        pending: false,
    })),
    on(getActivitiesAdmin, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(getActivitiesAdminSuccess, (state, action) => ({
        ...state,
        activity: [...action.activities.filter(x => x.idUser === action.idUser)],
        error: null,
        pending: false,
    })),
    on(getActivitiesAdminFailure, (state, { payload }) => ({
        ...state,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        },
        pending: false,
    })),
    on(deleteActivity, (state, action) => ({
        ...state,
        activity: [...state.activity.filter( x => x.id !== action.activity.id)],
        error: null,
        pending: true,
    })),
    on(deleteActivitySuccess, (state, action) => ({
        ...state,
        error: null,
        pending: false,
    })),
    on(deleteActivityFailure, (state, { payload }) => ({
        ...state,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        },
        pending: false,
    })),
    on(createActivity, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(createActivitySuccess, (state, action) => ({
        ...state,
        activity: [...state.activity, action.activity],
        error: null,
        pending: false
    })),
    on(createActivityFailure, (state, { payload }) => ({
        ...state,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        },
        pending: false,
    })),
    on(signUpActivity, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(signUpActivitySuccess, (state, action) => ({
        ...state,
        activity: state.activity.map(a => {
            if (a.id === action.activity.id) {
                return { ...a, ...action.activity };
            } else {
                return a;
            }
        }),
        error: null,
        pending: false,
    })),
    on(signUpActivityFailure, (state, { payload }) => ({
        ...state,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        },
        pending: false,
    })),
    on(unregisterActivity, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(unregisterActivitySuccess, (state, action) => ({
        ...state,
        activity: state.activity.map(a => {
            if (a.id === action.activity.id) {
                return { ...a, ...action.activity };
            } else {
                return a;
            }
        }),
        error: null,
        pending: false,
    })),
    on(unregisterActivityFailure, (state, { payload }) => ({
        ...state,
        error: {
            url: payload.url,
            status: payload.status,
            message: payload.message
        },
        pending: false,
    }))
  );

export function activitiesReducer(state, action) {
    return _activitiesReducer(state, action);
}
