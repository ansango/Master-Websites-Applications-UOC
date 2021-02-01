import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private _token!: string;
  constructor() {}

  set token(token: string) {
    this._token = token;
    localStorage.setItem('token', this._token);
  }

  get token() {
    const localToken = localStorage.getItem('token');
    const token = localToken === null ? this._token : localToken;
    return token;
  }

  isLoggedIn() {
    return this.token;
  }
}
