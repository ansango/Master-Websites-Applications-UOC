import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityDetailComponent } from './components/activity-detail/activity-detail.component';
import { ActivitiesAdminListComponent } from './components/activities-admin-list/activities-admin-list.component';
import { ActivityAdminDetailComponent } from './components/activity-admin-detail/activity-admin-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityDetailComponent,
    ActivitiesAdminListComponent,
    ActivityAdminDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ActivitiesModule { }
