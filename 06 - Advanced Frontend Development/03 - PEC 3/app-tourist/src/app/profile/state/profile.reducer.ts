import { createReducer, on } from '@ngrx/store';
import {
  addEducationSuccess,
  deleteEducationSuccess,
  loadEducationSuccess,
  updateEducationSuccess,
} from './profile.actions';
import { initialState } from './profile.state';

const _profileReducer = createReducer(
  initialState,
  on(loadEducationSuccess, (state, action) => {
    return { ...state, education: action.education };
  }),
  on(addEducationSuccess, (state, action) => {
    let education = { ...action.education };
    return {
      ...state,
      education: [...state.education, education],
    };
  }),
  on(updateEducationSuccess, (state, action) => {
    const updateEducation = state.education.map((education) => {
      return action.education.id === education.id
        ? action.education
        : education;
    });
    return { ...state, education: updateEducation };
  }),
  on(deleteEducationSuccess, (state, { id }) => {
    const deleteEducation = state.education.filter((education) => {
      return education.id !== id;
    });
    return { ...state, education: deleteEducation };
  })
);

export function profileReducer(state: any, action: any) {
  return _profileReducer(state, action);
}
