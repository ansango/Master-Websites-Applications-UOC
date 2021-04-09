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
  ],
})
export class AdminModule {}
