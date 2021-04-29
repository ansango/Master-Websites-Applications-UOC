import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AppState } from 'src/app/store/app.state';
import {
  setLoadingSkeleton,
  setLoadingSpinner,
} from 'src/app/store/shared/shared.actions';
import {
  addActivity,
  addActivitySuccess,
  addSubscription,
  addSubscriptionSuccess,
  deleteActivity,
  deleteActivitySuccess,
  deleteSubscription,
  deleteSubscriptionSuccess,
  loadActivities,
  loadActivitiesAdmin,
  loadActivitiesAdminSuccess,
  loadActivitiesSuccess,
  loadMyActivities,
  loadMyActivitiesSuccess,
  updateActivity,
  updateActivitySuccess,
} from './activities.actions';

@Injectable()
export class ActivitiesEffects {
  constructor(
    private actions$: Actions,
    private activitiesService: ActivitiesService,
    private router: Router,
    private store: Store<AppState>
  ) {}
  loadActivities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadActivities),
      mergeMap((action) => {
        this.store.dispatch(setLoadingSkeleton({ status: true }));
        return this.activitiesService.getActivities().pipe(
          map((activities) => {
            this.store.dispatch(setLoadingSkeleton({ status: false }));
            return loadActivitiesSuccess({ activities });
          })
        );
      })
    );
  });

  loadActivitiesAdmin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadActivitiesAdmin),
      mergeMap((action) => {
        this.store.dispatch(setLoadingSkeleton({ status: true }));
        const adminId: number = action.idUser!;
        return this.activitiesService.getAdminActivities(adminId).pipe(
          map((activitiesAdmin) => {
            this.store.dispatch(setLoadingSkeleton({ status: false }));
            return loadActivitiesAdminSuccess({ activitiesAdmin });
          })
        );
      })
    );
  });

  loadMyActivities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMyActivities),
      switchMap((action) => {
        const userId = action.idUser!;
        this.store.dispatch(setLoadingSkeleton({ status: true }));
        return this.activitiesService.getMyActivities(userId).pipe(
          map((myActivities) => {
            this.store.dispatch(setLoadingSkeleton({ status: false }));
            return loadMyActivitiesSuccess({ myActivities });
          })
        );
      })
    );
  });

  addActivity$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addActivity),
      mergeMap((action) => {
        const activity = action.activity;
        this.store.dispatch(setLoadingSpinner({ status: true }));
        return this.activitiesService.postActivity(activity).pipe(
          map((data) => {
            this.router.navigate(['admin']);
            const activity = { ...action.activity, id: data.id };
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return addActivitySuccess({ activity });
          })
        );
      })
    );
  });

  updateActivity$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateActivity),
      switchMap((action) => {
        const activity = action.activity;
        this.store.dispatch(setLoadingSpinner({ status: true }));
        return this.activitiesService.updateActivity(activity).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.router.navigate(['admin']);
            return updateActivitySuccess({ activity });
          })
        );
      })
    );
  });

  deleteActivity$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteActivity),
      switchMap((action) => {
        const id = action.id;
        this.store.dispatch(setLoadingSpinner({ status: true }));
        return this.activitiesService.deleteActivity(id).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return deleteActivitySuccess({ id });
          })
        );
      })
    );
  });

  addSubscription$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addSubscription),
      switchMap((action) => {
        const id = action.id!;
        const idUser = action.idUser!;
        this.store.dispatch(setLoadingSpinner({ status: true }));
        return this.activitiesService.addSubscription(id, idUser).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return addSubscriptionSuccess({ myActivity: data });
          })
        );
      })
    );
  });

  deleteSubscription$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteSubscription),
      switchMap((action) => {
        const id = action.id;
        const userId = action.userId;
        this.store.dispatch(setLoadingSpinner({ status: true }));
        return this.activitiesService.unSubscribeActivity(id, userId).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.router.navigate(['my-activities']);
            return deleteSubscriptionSuccess({ myActivity: data });
          })
        );
      })
    );
  });
}
