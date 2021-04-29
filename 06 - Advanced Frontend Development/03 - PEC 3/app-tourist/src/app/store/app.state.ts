import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from '../auth/state/auth.reducer';
import { AUTH_STATE_NAME } from '../auth/state/auth.selectors';
import { AuthState } from '../auth/state/auth.state';
import { favoritesReducer } from '../favorites/state/favorites.reducer';
import { FAVORITES_STATE_NAME } from '../favorites/state/favorites.selectors';
import { FavoritesState } from '../favorites/state/favorites.state';
import { sharedReducer } from './shared/shared.reducer';
import { SHARED_STATE_NAME } from './shared/shared.selectors';
import { SharedState } from './shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
  [FAVORITES_STATE_NAME]: FavoritesState;
}
export const appReducer: ActionReducerMap<AppState> = {
  [SHARED_STATE_NAME]: sharedReducer,
  [AUTH_STATE_NAME]: authReducer,
  [FAVORITES_STATE_NAME]: favoritesReducer,
};
