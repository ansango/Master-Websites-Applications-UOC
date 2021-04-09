import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('./views/activities/activities.module')).ActivitiesModule,
  },
  {
    path: 'profile',
    loadChildren: async () =>
      (await import('./views/profile/profile.module')).ProfileModule,
  },
  {
    path: 'user',
    loadChildren: async () =>
      (await import('./views/user/user.module')).UserModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
