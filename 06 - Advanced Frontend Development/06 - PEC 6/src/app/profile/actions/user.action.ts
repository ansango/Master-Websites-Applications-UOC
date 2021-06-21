import {createAction, props} from '@ngrx/store';
import { User } from '../models/user';
import { Credentials } from '../../login/models/credentials';

export const getLoginUser = createAction(
    '[User] Get Login User',
    props<{ credentials: Credentials }>()
  );

export const getLoginUserSuccess = createAction(
    '[User] Get Login User Success',
    props<{ user: any }>()
);

export const getLoginUserFailure = createAction(
    '[User] Get Login User Failure',
    props<{ payload: any }>()
);

export const createUser = createAction('[User] Create User',
    props<{ user: User }>()
);
export const createUserSuccess = createAction('[User] Create User Success',
    props<{ user: User }>()
);

export const createUserFailure = createAction('[User] Create User Failure',
    props<{ payload: any }>()
);

export const addUserEducation = createAction('[User/Education] Add User Education',
    props<{ user: User }>()
);
export const addUserEducationSuccess = createAction('[User/Education] Add User Education Success',
    props<{ user: User }>()
);

export const addUserEducationFailure = createAction('[User/Education] Add User Education Failure',
    props<{ payload: any }>()
);

export const updateUserEducation = createAction('[User/Education] Update User Education',
    props<{ user: User }>()
);
export const updateUserEducationSuccess = createAction('[User/Education] Update User Education Success',
    props<{ user: User }>()
);

export const updateUserEducationFailure = createAction('[User/Education] Update User Education Failure',
    props<{ payload: any }>()
);

export const deleteUserEducation = createAction('[User/Education] Delete User Education',
    props<{ user: User }>()
);
export const deleteUserEducationSuccess = createAction('[User/Education] Delete User Education Success',
    props<{ user: User }>()
);

export const deleteUserEducationFailure = createAction('[User/Education] Delete User Education Failure',
    props<{ payload: any }>()
);

export const addUserLanguage = createAction('[User/Language] Add User Language',
    props<{ user: User }>()
);
export const addUserLanguageSuccess = createAction('[User/Language] Add User Language Success',
    props<{ user: User }>()
);

export const addUserLanguageFailure = createAction('[User/Language] Add User Language Failure',
    props<{ payload: any }>()
);

export const updateUserLanguage = createAction('[User/Language] Update User Language',
    props<{ user: User }>()
);
export const updateUserLanguageSuccess = createAction('[User/Language] Update User Language Success',
    props<{ user: User }>()
);

export const updateUserLanguageFailure = createAction('[User/Language] Update User Language Failure',
    props<{ payload: any }>()
);

export const deleteUserLanguage = createAction('[User/Language] Delete User Language',
    props<{ user: User }>()
);
export const deleteUserLanguageSuccess = createAction('[User/Language] Delete User Language Success',
    props<{ user: User }>()
);

export const deleteUserLanguageFailure = createAction('[User/Language] Delete User Language Failure',
    props<{ payload: any }>()
);

export const updateUser = createAction('[User] Update User',
    props<{ user: User }>()
);
export const updateUserSuccess = createAction('[User] Update User Success',
    props<{ user: User }>()
);

export const updateUserFailure = createAction('[User] Update User Failure',
    props<{ payload: any }>()
);

export const getFavoriteUserActivitiesStorageSuccess = createAction('[User] Get Favorite User Activites Storage Success',
    props<{ favoriteActivitiesUser: number[] }>()
);

export const getFavoriteUserActivitiesStorageFailure = createAction('[User] Get Favorite User Activities Storage Failure',
    props<{ payload: any }>()
);

export const setFavoriteUserActivitiesStorage = createAction('[User] Set Favorite User Activites Storage',
    props<{ user: User, favoriteActivitiesUser: number[] }>()
);

export const setFavoriteUserActivitiesStorageSuccess = createAction('[User] Set Favorite User Activites Storage Success',
    props<{ favoriteActivitiesUser: number[] }>()
);

export const setFavoriteUserActivitiesStorageFailure = createAction('[User] Set Favorite User Activities Storage Failure',
    props<{ payload: any }>()
);

export const formatUser = createAction('[User]  Format User');
export const formatUserSuccess = createAction('[User] Format User Success');
