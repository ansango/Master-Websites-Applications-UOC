import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/Components/login/login.component';
import { RegisterComponent } from './profile/components/register/register.component';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { ProfileLanguageComponent } from './profile/components/profile-language/profile-language.component';
import { ProfileEducationComponent } from './profile/components/profile-education/profile-education.component';
import { ActivityListComponent } from './activities/components/activity-list/activity-list.component';
import { ActivitiesAdminListComponent } from './activities/components/activities-admin-list/activities-admin-list.component';
import { ActivityAdminDetailComponent } from './activities/components/activity-admin-detail/activity-admin-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'activity-list', component: ActivityListComponent },
  { path: 'activity-list/:id', component: ActivityListComponent },
  { path: 'activity-list-user/favorites', component: ActivityListComponent },
  { path: 'profile-language/:uid', component: ProfileLanguageComponent },
  { path: 'profile-language', component: ProfileLanguageComponent },
  { path: 'profile-education/:uid', component: ProfileEducationComponent },
  { path: 'profile-education', component: ProfileEducationComponent },
  { path: 'activities-admin-list', component: ActivitiesAdminListComponent },
  {
    path: 'activity-admin-detail/:id',
    component: ActivityAdminDetailComponent,
  },
  { path: 'activity-admin-detail', component: ActivityAdminDetailComponent },

  { path: '', redirectTo: '/activity-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
