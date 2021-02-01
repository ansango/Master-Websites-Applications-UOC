import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { WineNewComponent } from './wine/wine-new/wine-new.component';
import { WineDetailComponent } from './wine/wine-detail/wine-detail.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wine/list', component: WineListComponent },
  {
    path: 'wine/create',
    component: WineNewComponent,
    canActivate: [AuthGuard],
  },
  { path: 'wine/:code', component: WineDetailComponent },
  { path: '**', redirectTo: '/register' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
