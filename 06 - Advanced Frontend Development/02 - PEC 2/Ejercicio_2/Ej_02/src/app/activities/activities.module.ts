import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ACTIVITY_STATE_NAME } from './state/activities.selectors';
import { activitiesReducer } from './state/activities.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ActivitiesEffects } from './state/activities.effects';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesListComponent,
    children: [
      {
        path: 'detail/:id',
        component: ActivityComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [ActivitiesListComponent, ActivityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(ACTIVITY_STATE_NAME, activitiesReducer),
    EffectsModule.forFeature([ActivitiesEffects]),
  ],
})
export class ActivitiesModule {}
