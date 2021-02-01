import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WineItemComponent } from './wine-item/wine-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineNewComponent } from './wine-new/wine-new.component';

import { HttpClientModule } from '@angular/common/http';

import { WineService } from './services/wine.service';

import { ImagePipe } from './utils/image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
    ImagePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [WineService],
  bootstrap: [AppComponent],
})
export class AppModule {}
