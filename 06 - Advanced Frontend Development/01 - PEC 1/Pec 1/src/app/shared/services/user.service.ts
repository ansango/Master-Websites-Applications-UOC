import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, first, map, mergeAll, tap } from 'rxjs/operators';
import { Education } from '../models/education';
import { Profile } from '../models/profile';
import { User, UserForm } from '../models/user';
import { MessageService } from './message.service';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private readonly urlUsers = 'api/users';
  private readonly urlProfiles = 'api/profiles';

  private currentUser!: User;
  private loggedUser: boolean = false;
  private typeUser: string = '';

  constructor(
    private http: HttpClient,
    private profileService: ProfileService,
    private messageService: MessageService,
    private router: Router
  ) {}

  login(userForm: User): Observable<User> {
    const $user = <Observable<User>>this.http.get<User[]>(this.urlUsers).pipe(
      map((users) => {
        const _user = users.filter((user) => {
          return (
            user.email === userForm.email && user.password === userForm.password
          );
        });
        if (_user.length === 0) return this.log('user not found');
        this.setLocalUser(_user);
        return _user;
      }),
      first()
    );
    $user.subscribe(
      (user) => ((this.currentUser = user), (this.loggedUser = true))
    );
    return $user;
  }

  register(userForm: UserForm): Observable<User> {
    const $user = this.postUser({
      email: userForm.email,
      password: userForm.password,
      type: userForm.type,
    });

    $user.subscribe((user) => {
      const profile: Profile = {
        id: user.id,
        firstName: userForm.firstName,
        lastName: userForm.lastName,
        type: userForm.type,
      };
      this.profileService.postProfile(profile);
    });
    return $user;
  }

  private postUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlUsers, user, this.httpOptions);
  }

  logout(): void {
    localStorage.clear();
    this.loggedUser = false;
    this.router.navigate(['']);
  }

  getLocaleUser(): User {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!) || {};
    this.typeUser = this.currentUser.type!;
    this.loggedUser = true;
    return this.currentUser;
  }

  setLocalUser(user: User[]): void {
    const _user = user[0];
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        id: _user.id,
        email: _user.email,
        type: _user.type,
      })
    );
    this.typeUser = _user.type;
  }

  isUserLogged(): boolean {
    const isLoggedIn = Object.entries(this.getLocaleUser()).length !== 0;
    if (isLoggedIn) return (this.loggedUser = isLoggedIn);
    return (this.loggedUser = isLoggedIn);
  }

  isUserTourist(): boolean {
    if (this.typeUser === 'tourist') return true;
    return false;
  }

  isUserCompany(): boolean {
    if (this.typeUser === 'company') return true;
    return false;
  }

  private log(message: string): void {
    this.messageService.add(`${message}`);
  }
}
