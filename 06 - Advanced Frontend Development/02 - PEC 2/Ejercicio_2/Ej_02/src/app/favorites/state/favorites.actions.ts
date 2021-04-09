import { createAction, props } from '@ngrx/store';
import { Activity } from 'src/app/models/activity';

export const LOAD_FAVORITES = '[favorites page] load favorites';
export const LOAD_FAVORITES_SUCCESS = '[favorite page] load favorites success';
export const ADD_FAVORITE = '[activity page] add favorite';
export const ADD_FAVORITE_SUCCESS = '[activity page] add favorite success';
export const DELETE_FAVORITE = '[favorites page] delete favorite';
export const DELETE_FAVORITE_SUCCESS =
  '[favorites page] delete favorite success';

export const AUTO_DELETE_FAVORITES =
  '[favorites page] auto delete all favorites';

export const loadFavorites = createAction(LOAD_FAVORITES);
export const loadFavoritesSuccess = createAction(
  LOAD_FAVORITES_SUCCESS,
  props<{ activities: Activity[] }>()
);

export const addFavorite = createAction(
  ADD_FAVORITE,
  props<{ activity: Activity }>()
);

export const addFavoriteSuccess = createAction(
  ADD_FAVORITE_SUCCESS,
  props<{ activity: Activity }>()
);

export const deleteFavorite = createAction(
  DELETE_FAVORITE,
  props<{ id: number | undefined }>()
);

export const deleteFavoriteSuccess = createAction(
  DELETE_FAVORITE_SUCCESS,
  props<{ id: number | undefined }>()
);

export const autoDeleteFavorites = createAction(AUTO_DELETE_FAVORITES);
