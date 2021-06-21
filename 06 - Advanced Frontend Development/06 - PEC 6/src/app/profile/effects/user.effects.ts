import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, filter, catchError, mergeMap, exhaustMap } from 'rxjs/operators';
import * as UserActions from '../actions';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import * as LoginActions from '../../login/actions';

@Injectable()
export class UserEffects {
  GetLoginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getLoginUser, LoginActions.loginSuccess),
      exhaustMap(({ credentials }) =>
        this.userService.login(credentials).pipe(
          map((user) => UserActions.getLoginUserSuccess({ user })),
          catchError((error) =>
            of(UserActions.getLoginUserFailure({ payload: error }))
          )
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      mergeMap(({ user }) =>
        this.userService.updateUser(user).pipe(
          map(() => UserActions.updateUserSuccess({ user })),
          catchError((error) =>
            of(UserActions.updateUserFailure({ payload: error }))
          )
        )
      )
    )
  );

  updateUserLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUserLanguage),
      mergeMap(({ user }) =>
        this.userService.updateUser(user).pipe(
          map(() => UserActions.updateUserLanguageSuccess({ user })),
          catchError((error) =>
            of(UserActions.updateUserLanguageFailure({ payload: error }))
          )
        )
      )
    )
  );

  deleteUserLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUserLanguage),
      mergeMap(({ user }) =>
        this.userService.updateUser(user).pipe(
          map(() => UserActions.deleteUserLanguageSuccess({ user })),
          catchError((error) =>
            of(UserActions.deleteUserLanguageFailure({ payload: error }))
          )
        )
      )
    )
  );

  addUserLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addUserLanguage),
      mergeMap(({ user }) =>
        this.userService.updateUser(user).pipe(
          map(() => UserActions.addUserLanguageSuccess({ user })),
          catchError((error) =>
            of(UserActions.addUserLanguageFailure({ payload: error }))
          )
        )
      )
    )
  );

  updateUserEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUserEducation),
      mergeMap(({ user }) =>
        this.userService.updateUser(user).pipe(
          map(() => UserActions.updateUserEducationSuccess({ user })),
          catchError((error) =>
            of(UserActions.updateUserEducationFailure({ payload: error }))
          )
        )
      )
    )
  );

  deleteUserEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUserEducation),
      mergeMap(({ user }) =>
        this.userService.updateUser(user).pipe(
          map(() => UserActions.deleteUserEducationSuccess({ user })),
          catchError((error) =>
            of(UserActions.deleteUserEducationFailure({ payload: error }))
          )
        )
      )
    )
  );

  addUserEducation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addUserEducation),
      mergeMap(({ user }) =>
        this.userService.updateUser(user).pipe(
          map(() => UserActions.addUserEducationSuccess({ user })),
          catchError((error) =>
            of(UserActions.addUserEducationFailure({ payload: error }))
          )
        )
      )
    )
  );

  updateUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          UserActions.updateUserSuccess,
          UserActions.addUserLanguageSuccess,
          UserActions.updateUserLanguageSuccess,
          UserActions.addUserEducationSuccess,
          UserActions.updateUserEducationSuccess
        ),
        map(() => {
          this.redirectTo('/profile');
        })
      ),
    { dispatch: false }
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUser),
      exhaustMap(({ user }) =>
        this.userService.addUser(user).pipe(
          map((newUser) => UserActions.createUserSuccess({ user: newUser })),
          catchError((error) =>
            of(UserActions.createUserFailure({ payload: error }))
          )
        )
      )
    )
  );

  getFavoriteActivitiesUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUserSuccess, UserActions.getLoginUserSuccess),
      mergeMap(({ user }) =>
        this.userService.getUserFavoriteActivities(user.id).pipe(
          filter(() => user.profile.type === 'Tourist'),
          map((favoriteActivitiesUser) =>
            UserActions.getFavoriteUserActivitiesStorageSuccess({
              favoriteActivitiesUser,
            })
          ),
          catchError((error) =>
            of(
              UserActions.getFavoriteUserActivitiesStorageFailure({
                payload: error,
              })
            )
          )
        )
      )
    )
  );

  setFavoriteUserActivitiesStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.setFavoriteUserActivitiesStorage),
      exhaustMap(({ user, favoriteActivitiesUser }) =>
        this.userService
          .setUserFavoriteActivities(favoriteActivitiesUser, user.id)
          .pipe(
            map(() =>
              UserActions.setFavoriteUserActivitiesStorageSuccess({
                favoriteActivitiesUser,
              })
            ),
            catchError((error) =>
              of(
                UserActions.setFavoriteUserActivitiesStorageFailure({
                  payload: error,
                })
              )
            )
          )
      )
    )
  );

  formatUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.formatUser, LoginActions.logoutConfirmation),
      map(() => UserActions.formatUserSuccess())
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {}

  redirectTo(uri: string): void {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
}
