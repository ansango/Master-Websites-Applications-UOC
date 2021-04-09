import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoritesState } from './favorites.state';

export const FAVORITES_STATE_NAME = 'favorites';

export const getFavoritesState = createFeatureSelector<FavoritesState>(
  FAVORITES_STATE_NAME
);

export const getFavorites = createSelector(getFavoritesState, (state) => {
  return state.favorites;
});

export const getFavoriteById = createSelector(
  getFavoritesState,
  (state: any, props: any) => {
    return state.favorites.find((favorite: any) => favorite.id === props.id);
  }
);
