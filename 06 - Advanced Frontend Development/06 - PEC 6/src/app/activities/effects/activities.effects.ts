import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { map, tap, catchError, mergeMap, exhaustMap } from 'rxjs/operators';
import * as ActivitiesActions from '../actions';
import { ActivityService } from '../services/activity.service';

@Injectable()
export class ActivitiesEffects {
  GetAllActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.getAllActivities),
      mergeMap(() =>
        this.activityService.getActivities().pipe(
          map((activities) =>
            ActivitiesActions.getAllActivitiesSuccess({ activities })
          ),
          catchError((error) =>
            of(ActivitiesActions.getAllActivitiesFailure({ payload: error }))
          )
        )
      )
    )
  );

  GetUserActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.getUserActivities),
      mergeMap(({ idUser }) =>
        this.activityService.getActivities().pipe(
          map((activities) =>
            ActivitiesActions.getUserActivitiesSuccess({ activities, idUser })
          ),
          catchError((error) =>
            of(ActivitiesActions.getUserActivitiesFailure({ payload: error }))
          )
        )
      )
    )
  );

  updateActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.updateActivity),
      mergeMap(({ activity }) =>
        this.activityService.updateActivity(activity).pipe(
          map(() => ActivitiesActions.updateActivitySuccess({ activity })),
          catchError((error) =>
            of(ActivitiesActions.updateActivityFailure({ payload: error }))
          )
        )
      )
    )
  );

  signUpActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.signUpActivity),
      mergeMap(({ activity }) =>
        this.activityService.updateActivity(activity).pipe(
          map(() => ActivitiesActions.signUpActivitySuccess({ activity })),
          catchError((error) =>
            of(ActivitiesActions.signUpActivityFailure({ payload: error }))
          )
        )
      )
    )
  );

  unregisterActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.unregisterActivity),
      mergeMap(({ activity }) =>
        this.activityService.updateActivity(activity).pipe(
          map(() => ActivitiesActions.unregisterActivitySuccess({ activity })),
          catchError((error) =>
            of(ActivitiesActions.unregisterActivityFailure({ payload: error }))
          )
        )
      )
    )
  );

  createActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.createActivity),
      mergeMap(({ activity }) =>
        this.activityService.addActivity(activity).pipe(
          map(() => ActivitiesActions.createActivitySuccess({ activity })),
          catchError((error) =>
            of(ActivitiesActions.createActivityFailure({ payload: error }))
          )
        )
      )
    )
  );

  deleteActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.deleteActivity),
      mergeMap(({ activity }) =>
        this.activityService.deleteActivity(activity.id).pipe(
          map(() => ActivitiesActions.deleteActivitySuccess({ activity })),
          catchError((error) =>
            of(ActivitiesActions.deleteActivityFailure({ payload: error }))
          )
        )
      )
    )
  );

  GetFavoriteUserActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.getFavoriteUserActivities),
      mergeMap(({ idFavoriteUserActivities }) =>
        this.activityService.getActivities().pipe(
          map((activities) =>
            ActivitiesActions.getFavoriteUserActivitiesSuccess({
              activities,
              idFavoriteUserActivities,
            })
          ),
          catchError((error) =>
            of(
              ActivitiesActions.getFavoriteUserActivitiesFailure({
                payload: error,
              })
            )
          )
        )
      )
    )
  );

  GetActivitiesAdmin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivitiesActions.getActivitiesAdmin),
      mergeMap(({ idUser }) =>
        this.activityService.getActivities().pipe(
          map((activities) =>
            ActivitiesActions.getActivitiesAdminSuccess({ activities, idUser })
          ),
          catchError((error) =>
            of(ActivitiesActions.getActivitiesAdminFailure({ payload: error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private activityService: ActivityService
  ) {}
}
