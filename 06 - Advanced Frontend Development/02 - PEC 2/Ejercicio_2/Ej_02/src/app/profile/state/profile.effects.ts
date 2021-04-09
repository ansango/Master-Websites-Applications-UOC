import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import {
  addEducation,
  addEducationSuccess,
  deleteEducation,
  deleteEducationSuccess,
  loadEducation,
  loadEducationSuccess,
  updateEducation,
  updateEducationSuccess,
} from './profile.actions';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  loadEducation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadEducation),
      mergeMap((action) => {
        const userId = action.idUser;

        return this.authService.getEducation().pipe(
          map((data) => {
            const education = data.filter((certificate) => {
              return certificate.userId === userId;
            });

            return loadEducationSuccess({ education });
          })
        );
      })
    );
  });

  addEducation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addEducation),
      mergeMap((action) => {
        const education = action.education;
        return this.authService.addEducation(education).pipe(
          map((data) => {
            this.router.navigate(['/profile']);
            return addEducationSuccess({ education });
          })
        );
      })
    );
  });

  updateEducation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateEducation),
      switchMap((action) => {
        const education = action.education;
        return this.authService.updateEducation(education).pipe(
          map((data) => {
            this.router.navigate(['/profile']);
            return updateEducationSuccess({ education });
          })
        );
      })
    );
  });

  deleteEducation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteEducation),
      switchMap((action) => {
        const id = action.id;
        return this.authService.deleteEducation(id).pipe(
          map((data) => {
            return deleteEducationSuccess({ id });
          })
        );
      })
    );
  });
}
