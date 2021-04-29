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
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    //children: [{ path: 'edit/:id', component: EditProfileComponent }],
  },
  { path: 'edit/:id', component: EditProfileComponent },
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
    FlexLayoutModule,
    NgxSkeletonLoaderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
})
export class ProfileModule {}
