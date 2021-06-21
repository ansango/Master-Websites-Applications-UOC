import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { LoginState } from '../../login/reducers';
import * as LoginAction from '../../login/actions';
import { UserState } from '../../profile/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginState$: LoginState;
  userState$: UserState;

  constructor(public router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('login').subscribe((login) => (this.loginState$ = login));
    this.store.select('user').subscribe((user) => (this.userState$ = user));
  }
  // Se recoge la pulsación sobre el botón de logout
  onClickLogout(): void {
    // Se desloga al usuario
    this.store.dispatch(LoginAction.logout());
  }

  // Se recoge la pulsación sobre el botón de My Activities
  onClickMyActivities(): void {
    const url = 'activity-list/' + this.userState$.user?.id;
    this.router.navigateByUrl(url);
  }

  // Se recoge la pulsación sobre el botón de Favorites
  onClickFavorites(): void {
    const url = 'activity-list-user/favorites';
    this.router.navigateByUrl(url);
  }

  // Se recoge la pulsación sobre el botón de Home
  onClickHome(): void {
    this.router.navigate(['/activity-list']);
  }
}
