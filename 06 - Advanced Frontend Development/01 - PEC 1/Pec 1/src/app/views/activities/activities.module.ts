import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { AdminComponent } from './admin/admin.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyActivitiesComponent } from './my-activities/my-activities.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { ModalModule } from 'src/app/shared/components/modal/index';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    NewComponent,
    AdminComponent,
    FavoritesComponent,
    MyActivitiesComponent,
    AdminDetailComponent,
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    ReactiveFormsModule,
    ModalModule,
  ],
})
export class ActivitiesModule {}
