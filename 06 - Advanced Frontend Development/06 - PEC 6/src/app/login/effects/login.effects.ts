import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, tap, catchError, exhaustMap } from 'rxjs/operators';
import * as LoginActions from '../actions';

import { Router } from '@angular/router';
import { UserService } from 'src/app/profile/services/user.service';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      exhaustMap(({ credentials }) =>
        this.userService.login(credentials).pipe(
          map((user) => LoginActions.loginSuccess({ credentials })),
          catchError((error) =>
            of(LoginActions.loginFailure({ payload: error }))
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.loginSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.logout),
      map(() => LoginActions.logoutConfirmation())
    )
  );

  logoutConfirmation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.logoutConfirmation),
        tap(() => this.router.navigate(['/activity-list']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {}
}
