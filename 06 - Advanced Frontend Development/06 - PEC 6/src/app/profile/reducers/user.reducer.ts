import * as UserAction from '../actions';
import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user';

export interface UserState {
  user: User;
  error: string | null;
  pending: boolean;
}

export const initialState: UserState = {
  user: null,
  error: null,
  pending: false,
};

const _userReducer = createReducer(
  initialState,
  on(UserAction.getLoginUser, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(UserAction.getLoginUserSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: null,
    pending: false,
  })),
  on(UserAction.getLoginUserFailure, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
    pending: false,
  })),
  on(UserAction.updateUser, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(UserAction.updateUserSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: null,
    pending: false,
  })),
  on(UserAction.updateUserFailure, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
    pending: false,
  })),
  on(UserAction.createUser, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(UserAction.createUserSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: false,
    pending: false,
  })),
  on(UserAction.createUserFailure, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
    pending: false,
  })),
  on(UserAction.getFavoriteUserActivitiesStorageSuccess, (state, action) => ({
    ...state,
    user: {
      ...state.user,
      profile: {
        ...state.user.profile,
        favorites: action.favoriteActivitiesUser,
      },
    },
    error: false,
    pending: false,
  })),
  on(
    UserAction.getFavoriteUserActivitiesStorageFailure,
    (state, { payload }) => ({
      ...state,
      error: {
        url: payload.url,
        status: payload.status,
        message: payload.message,
      },
      pending: false,
    })
  ),
  on(UserAction.setFavoriteUserActivitiesStorage, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(UserAction.setFavoriteUserActivitiesStorageSuccess, (state, action) => ({
    ...state,
    user: {
      ...state.user,
      profile: {
        ...state.user.profile,
        favorites: action.favoriteActivitiesUser,
      },
    },
    error: null,
    pending: false,
  })),
  on(
    UserAction.setFavoriteUserActivitiesStorageFailure,
    (state, { payload }) => ({
      ...state,
      error: {
        url: payload.url,
        status: payload.status,
        message: payload.message,
      },
      pending: false,
    })
  ),
  on(UserAction.deleteUserLanguage, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(UserAction.deleteUserLanguageSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: null,
    pending: false,
  })),
  on(UserAction.deleteUserLanguageFailure, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
    pending: false,
  })),
  on(UserAction.deleteUserLanguage, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(UserAction.deleteUserLanguageSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: null,
    pending: false,
  })),
  on(UserAction.deleteUserLanguageFailure, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
    pending: false,
  })),
  on(UserAction.updateUserLanguage, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(UserAction.updateUserLanguageSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: null,
    pending: false,
  })),
  on(UserAction.updateUserLanguageFailure, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
    pending: false,
  })),
  on(UserAction.addUserLanguage, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(UserAction.addUserLanguageSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: null,
    pending: false,
  })),
  on(UserAction.addUserLanguageFailure, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
    pending: false,
  })),
  on(UserAction.addUserEducation, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(UserAction.addUserEducationSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: null,
    pending: false,
  })),
  on(UserAction.addUserEducationFailure, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
    pending: false,
  })),
  on(UserAction.updateUserEducation, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(UserAction.updateUserEducationSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: null,
    pending: false,
  })),
  on(UserAction.updateUserEducationFailure, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
    pending: false,
  })),
  on(UserAction.deleteUserEducation, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(UserAction.deleteUserEducationSuccess, (state, action) => ({
    ...state,
    user: action.user,
    error: null,
    pending: false,
  })),
  on(UserAction.deleteUserEducationFailure, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
    pending: false,
  })),
  on(UserAction.formatUserSuccess, () => initialState)
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
