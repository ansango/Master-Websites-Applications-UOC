import { createAction, props } from '@ngrx/store';
import { Education } from 'src/app/models/education';

export const LOAD_EDUCATION = '[profile page] load education';
export const LOAD_EDUCATION_SUCCESS = '[profile page] load education success';

export const ADD_EDUCATION = '[profile page] add education';
export const ADD_EDUCATION_SUCCESS = '[profile page] add education success';

export const UPDATE_EDUCATION = '[profile page] update education';
export const UPDATE_EDUCATION_SUCCESS =
  '[profile page] update education success';

export const DELETE_EDUCATION = '[profile page] delete education';
export const DELETE_EDUCATION_SUCCESS =
  '[profile page] delete education success';

export const loadEducation = createAction(
  LOAD_EDUCATION,
  props<{ idUser: number | undefined }>()
);
export const loadEducationSuccess = createAction(
  LOAD_EDUCATION_SUCCESS,
  props<{ education: Education[] }>()
);

export const addEducation = createAction(
  ADD_EDUCATION,
  props<{ education: Education }>()
);

export const addEducationSuccess = createAction(
  ADD_EDUCATION_SUCCESS,
  props<{ education: Education }>()
);

export const updateEducation = createAction(
  UPDATE_EDUCATION,
  props<{ education: Education }>()
);

export const updateEducationSuccess = createAction(
  UPDATE_EDUCATION_SUCCESS,
  props<{ education: Education }>()
);

export const deleteEducation = createAction(
  DELETE_EDUCATION,
  props<{ id: number }>()
);

export const deleteEducationSuccess = createAction(
  DELETE_EDUCATION_SUCCESS,
  props<{ id: number }>()
);
