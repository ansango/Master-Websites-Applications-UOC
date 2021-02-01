import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineNewComponent } from './wine-new/wine-new.component';

const routes: Routes = [
  { path: 'list', component: WineListComponent },
  {
    path: 'create',
    component: WineNewComponent,
    canActivate: [AuthGuard],
  },
  { path: ':code', component: WineDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WineRoutingModule {}
