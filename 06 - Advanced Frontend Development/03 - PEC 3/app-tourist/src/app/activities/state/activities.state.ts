import { Activity } from 'src/app/models/activity';

export interface ActivitiesState {
  activities: Activity[];
  activitiesAdmin: Activity[];
  myActivities: Activity[];
}

export const initialState: ActivitiesState = {
  activities: [],
  activitiesAdmin: [],
  myActivities: [],
};
