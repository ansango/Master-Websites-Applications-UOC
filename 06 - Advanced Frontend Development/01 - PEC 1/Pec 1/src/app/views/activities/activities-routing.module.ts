import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AdminComponent } from './admin/admin.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ListComponent } from './list/list.component';
import { MyActivitiesComponent } from './my-activities/my-activities.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'activities/new', component: NewComponent },
  { path: 'activities/edit/:id', component: AdminDetailComponent },
  { path: 'activities/favorites', component: FavoritesComponent },
  { path: 'my-activities', component: MyActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesRoutingModule {}
