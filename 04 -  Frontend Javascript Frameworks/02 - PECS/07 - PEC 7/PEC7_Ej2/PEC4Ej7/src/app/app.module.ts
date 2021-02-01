import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WineItemComponent } from './wine/wine-item/wine-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { WineNewComponent } from './wine/wine-new/wine-new.component';
import { WineDetailComponent } from './wine/wine-detail/wine-detail.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { WineService } from './services/wine.service';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { WineAppInterceptor } from './services/wine-app.interceptor';

import { ImagePipe } from './utils/image.pipe';
import { AppRoutesModule } from './app-routes.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
    ImagePipe,
    LoginComponent,
    RegisterComponent,
    WineDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    AppRoutesModule,
  ],
  providers: [
    WineService,
    UserService,
    AuthGuard,
    UserStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WineAppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
