import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityComponent } from './activity/activity.component';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FavoritesModule {}
