import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from './profile.state';

export const PROFILE_STATE_NAME = 'profile';
export const getProfileState = createFeatureSelector<ProfileState>(
  PROFILE_STATE_NAME
);

export const getEducation = createSelector(getProfileState, (state) => {
  return state.education;
});

export const getEducationById = createSelector(
  getProfileState,
  (state: any, props: any) => {
    return state.education.find(
      (certificate: any) => certificate.id === props.id
    );
  }
);
