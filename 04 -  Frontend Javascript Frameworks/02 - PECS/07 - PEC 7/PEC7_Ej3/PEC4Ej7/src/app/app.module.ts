import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { WineService } from './services/wine.service';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { WineAppInterceptor } from './services/wine-app.interceptor';
import { AppRoutesModule } from './app-routes.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [
    WineService,
    UserService,
    UserStoreService,
    AuthGuard,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: WineAppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
