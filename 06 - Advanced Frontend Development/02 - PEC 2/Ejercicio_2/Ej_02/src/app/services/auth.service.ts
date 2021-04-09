import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Education } from '../models/education';
import { User } from '../models/user';
import { AppState } from '../store/app.state';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlUsers = 'api/users';
  private urlEducation = 'api/education';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private messageService: MessageService
  ) {}

  login(email: string, password: string) {
    this.messageService.resetMessages();
    return this.http.get<User[]>(this.urlUsers).pipe(
      map((users) => {
        const user = users.filter((user) => {
          return user.email === email && user.password === password;
        });
        if (user.length === 0) {
          this.messageService.setMessageErr('Not user found');
          throw new Error('Not user found');
        }
        this.messageService.setMessageOK('Login Success');
        return user;
      })
    );
  }

  signUp(user: User) {
    return this.http.post<User>(this.urlUsers, user, this.httpOptions);
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
  }

  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData' || '{}');
    if (userDataString) {
      const profile = JSON.parse(userDataString);
      return profile;
    }
    return null;
  }

  logout() {
    this.messageService.resetMessages();
    localStorage.clear();
  }

  formatUser(data: User): User {
    return {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      userType: data.userType,
      about: data.about,
      birthday: data.birthday,
      phone: data.phone,
      nationality: data.nationality,
      nif: data.nif,
      companyName: data.companyName,
      companyDescription: data.companyDescription,
      cif: data.cif,
    };
  }

  newFormatUser(data: User): User {
    return {
      id: data.id,
      email: data.email,
      password: data.password,
      userType: data.userType,
      firstName: data.firstName,
      lastName: data.lastName,
    };
  }

  updateUser(user: User): Observable<any> {
    const url = `${this.urlUsers}/${user.id}`;
    return this.http.put<User>(url, user, this.httpOptions);
  }

  getEducation(): Observable<Education[]> {
    const url = `${this.urlEducation}`;
    return this.http.get<Education[]>(url);
  }

  addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(
      this.urlEducation,
      education,
      this.httpOptions
    );
  }

  updateEducation(education: Education): Observable<any> {
    const url = `${this.urlEducation}/${education.id}`;
    return this.http.put<Education>(url, education, this.httpOptions);
  }

  deleteEducation(id?: number): Observable<Education> {
    const url = `${this.urlEducation}/${id}`;
    return this.http.delete<Education>(url, this.httpOptions);
  }
}
