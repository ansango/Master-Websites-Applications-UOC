import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationNewEditComponent } from './education-new-edit/education-new-edit.component';
import { ProfileTouristComponent } from './profile-tourist/profile-tourist.component';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'edit/tourist', component: ProfileTouristComponent },
  { path: 'edit/company', component: ProfileCompanyComponent },
  { path: 'new-edu', component: EducationNewEditComponent },
  { path: 'edit-edu/:id', component: EducationNewEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
