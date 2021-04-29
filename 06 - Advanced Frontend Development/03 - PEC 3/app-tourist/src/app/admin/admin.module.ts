import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ACTIVITY_STATE_NAME } from '../activities/state/activities.selectors';
import { activitiesReducer } from '../activities/state/activities.reducer';
import { ActivitiesEffects } from '../activities/state/activities.effects';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
const routes: Routes = [
  {
    path: '',
    component: ActivitiesListComponent,
    children: [
      {
        path: 'add',
        component: AddActivityComponent,
      },
      {
        path: 'edit/:id',
        component: EditActivityComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ActivitiesListComponent,
    AddActivityComponent,
    EditActivityComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(ACTIVITY_STATE_NAME, activitiesReducer),
    EffectsModule.forFeature([ActivitiesEffects]),
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatExpansionModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
})
export class AdminModule {}
