import { createReducer, on } from '@ngrx/store';
import {
  addFavoriteSuccess,
  autoDeleteFavorites,
  deleteFavoriteSuccess,
  loadFavoritesSuccess,
} from './favorites.actions';
import { initialState } from './favorites.state';

const _favoritesReducer = createReducer(
  initialState,
  on(loadFavoritesSuccess, (state, action) => {
    return {
      ...state,
      favorites: action.activities,
    };
  }),
  on(addFavoriteSuccess, (state, action) => {
    let favorite = { ...action.activity };
    return { ...state, favorites: [...state.favorites, favorite] };
  }),
  on(deleteFavoriteSuccess, (state, { id }) => {
    const favorites = state.favorites.filter((favorite) => {
      return favorite.id !== id;
    });
    return { ...state, favorites: favorites };
  }),
  on(autoDeleteFavorites, (state) => {
    return { ...state, favorites: [] };
  })
);

export function favoritesReducer(state: any, action: any) {
  return _favoritesReducer(state, action);
}
