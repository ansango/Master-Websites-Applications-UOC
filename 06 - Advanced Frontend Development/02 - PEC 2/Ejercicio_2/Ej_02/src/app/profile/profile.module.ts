import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEducationComponent } from './edit-education/edit-education.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { StoreModule } from '@ngrx/store';
import { PROFILE_STATE_NAME } from './state/profile.selectors';
import { profileReducer } from './state/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './state/profile.effects';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [{ path: 'edit/:id', component: EditProfileComponent }],
  },
  {
    path: 'edu/add',
    component: AddEducationComponent,
  },
  {
    path: 'edu/edit/:id',
    component: EditEducationComponent,
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    EducationComponent,
    EditProfileComponent,
    EditEducationComponent,
    AddEducationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(PROFILE_STATE_NAME, profileReducer),
    EffectsModule.forFeature([ProfileEffects]),
  ],
})
export class ProfileModule {}
