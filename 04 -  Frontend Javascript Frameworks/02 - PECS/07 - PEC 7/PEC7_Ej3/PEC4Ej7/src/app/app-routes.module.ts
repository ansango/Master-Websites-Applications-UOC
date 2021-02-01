import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: async () =>
      (await import('../app/user/user.module')).UserModule,
  },
  {
    path: 'wine',
    loadChildren: async () =>
      (await import('../app/wine/wine.module')).WineModule,
  },
  { path: '**', redirectTo: 'user/register' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
