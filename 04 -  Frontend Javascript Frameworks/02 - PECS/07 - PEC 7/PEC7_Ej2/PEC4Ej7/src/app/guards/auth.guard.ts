import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userStore: UserStoreService, private router: Router) {}
  canActivate(): boolean {
    console.log('AuthGuard#canActivate called');
    if (this.userStore.isLoggedIn()) {
      return true;
    }
    console.log('AuthGuard#canActivate not authorized to access page');
    this.router.navigate(['login']);
    return false;
  }
}
