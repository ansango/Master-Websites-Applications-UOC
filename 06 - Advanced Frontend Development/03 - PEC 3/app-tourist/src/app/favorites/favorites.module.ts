import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityComponent } from './activity/activity.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
    NgxSkeletonLoaderModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class FavoritesModule {}
