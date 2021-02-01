import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineRoutingModule } from './wine-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineItemComponent } from './wine-item/wine-item.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineNewComponent } from './wine-new/wine-new.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ImagePipe } from '../utils/image.pipe';

@NgModule({
  imports: [
    CommonModule,
    WineRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  declarations: [
    WineDetailComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
    ImagePipe,
  ],
})
export class WineModule {}
