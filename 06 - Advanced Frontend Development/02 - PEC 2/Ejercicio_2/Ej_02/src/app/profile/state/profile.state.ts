import { Education } from 'src/app/models/education';

export interface ProfileState {
  education: Education[];
}

export const initialState: ProfileState = {
  education: [],
};
