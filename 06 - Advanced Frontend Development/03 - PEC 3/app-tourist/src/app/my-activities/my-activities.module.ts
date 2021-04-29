import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityComponent } from './activity/activity.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ACTIVITY_STATE_NAME } from '../activities/state/activities.selectors';
import { activitiesReducer } from '../activities/state/activities.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ActivitiesEffects } from '../activities/state/activities.effects';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatIconModule } from '@angular/material/icon';
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
    NgxSkeletonLoaderModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
  ],
})
export class MyActivitiesModule {}
