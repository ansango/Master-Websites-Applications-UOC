import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ModalModule } from 'src/app/shared/components/modal';
import { ProfileTouristComponent } from './profile-tourist/profile-tourist.component';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { EducationNewEditComponent } from './education-new-edit/education-new-edit.component';

@NgModule({
  declarations: [
    ProfileComponent,
    EducationComponent,
    ProfileTouristComponent,
    EducationNewEditComponent,
    ProfileCompanyComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ModalModule,
    ReactiveFormsModule,
  ],
})
export class ProfileModule {}
