import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { autoLogout } from 'src/app/auth/state/auth.actions';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/store/app.state';
import {
  addFavorite,
  addFavoriteSuccess,
  autoDeleteFavorites,
  deleteFavorite,
  deleteFavoriteSuccess,
  loadFavorites,
  loadFavoritesSuccess,
} from './favorites.actions';

@Injectable()
export class FavoritesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private activitiesService: ActivitiesService,
    private authService: AuthService,
    private router: Router
  ) {}

  loadFavorites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadFavorites),
      mergeMap((action) => {
        const activities = this.activitiesService.getFavorites();
        return of(loadFavoritesSuccess({ activities }));
      })
    );
  });

  addFavorite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addFavorite),
      mergeMap((action) => {
        const activity = action.activity;
        this.activitiesService.addFavorites(activity);
        return of(addFavoriteSuccess({ activity }));
      })
    );
  });

  deleteFavorite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteFavorite),
      switchMap((action) => {
        const id = action.id;
        this.activitiesService.deleteFavorite(id);
        this.router.navigate(['favorites']);
        return of(deleteFavoriteSuccess({ id }));
      })
    );
  });

  autoDeleteFavorites$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogout),
      switchMap((action) => {
        this.authService.logout();
        return of(autoDeleteFavorites());
      })
    );
  });
}
