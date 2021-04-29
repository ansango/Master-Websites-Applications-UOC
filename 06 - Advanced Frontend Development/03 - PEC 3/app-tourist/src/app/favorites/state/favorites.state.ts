import { Activity } from 'src/app/models/activity';

export interface FavoritesState {
  favorites: Activity[] ;
}

export const initialState: FavoritesState = {
  favorites: [],
};
