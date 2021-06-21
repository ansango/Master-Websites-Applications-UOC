import { Injectable, Input } from '@angular/core';
import { User } from '../models/user';
import { Credentials } from '../../login/models/credentials';
import { throwError, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { CommonService } from 'src/app/Shared/Services/common.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends CommonService {
  private usersUrl = 'api/users'; // URL to web api

  constructor(private http: HttpClient) {
    super();
  }

  login({ email, password }: Credentials): Observable<any> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map((users) => {
        const user = users.find(
          (x) => x.profile.email === email && x.profile.password === password
        );
        if (user !== undefined) {
          return user;
        } else {
          throw throwError('Invalid username or password');
        }
      })
    );
  }

  /**
   * Función que devuelve los identificadores de las actividades favoritas del usuario logado.
   * @return array con el id de las actividades favoritas del usuario logado.
   */
  getUserFavoriteActivities(idUser: number): Observable<number[]> {
    let idActivitiesUserFavorites: number[];
    idActivitiesUserFavorites = JSON.parse(
      localStorage.getItem('lStorageFavorites' + idUser)
    );
    if (idActivitiesUserFavorites === null) {
      idActivitiesUserFavorites = new Array<number>();
    }
    return of(idActivitiesUserFavorites);
  }

  /**
   * Función que actualiza los identificadores de las actividades favoritas del usuario logado.
   * @param idActivitiesUserFavorites - array con los id de las actividades favoritas del usuario
   */
  setUserFavoriteActivities(
    idActivitiesUserFavorites: number[],
    idUser: number
  ): Observable<boolean> {
    try {
      localStorage.setItem(
        'lStorageFavorites' + idUser,
        JSON.stringify(idActivitiesUserFavorites)
      );
      return of(true);
    } catch (e) {
      throw throwError(e);
    }
  }

  /**
   * Función que devuelve la lista de usuarios.
   * @return los usuarios del sistema
   */
  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.usersUrl)
      .pipe(catchError(this.handleError<User[]>('getUsers')));
  }

  /**
   * Función que devuelve un usuario.
   * @param id - Identificador del usuario
   * @return Observable<User>
   */
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http
      .get<User>(url)
      .pipe(catchError(this.handleError<User>(`getUser id=${id}`)));
  }

  /**
   * Función que actualiza un usuario.
   * @param user - usuario a actualizar
   * @return Observable<User>
   */
  updateUser(user: User): Observable<User> {
    return this.http
      .put(this.usersUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateUser')));
  }

  /**
   * Función que comprueba si existe un usuario.
   * @param user - usuario a añadir
   * @return Observable<boolean>
   */
  userExist(user: User): Observable<boolean> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map((users) => {
        if (
          users.find((x) => x.profile.email === user.profile.email) ===
          undefined
        ) {
          return false;
        } else {
          return true;
        }
      })
    );
  }

  /**
   * Función que añade un usuario.
   * @param user - usuario a añadir
   * @return Observable<User>
   */
  addUser(user: User): Observable<any> {
    return this.userExist(user).pipe(
      exhaustMap((exist) => {
        if (exist) {
          throw throwError('That email is already assigned to another user.');
        } else {
          return this.http
            .post<User>(this.usersUrl, user, this.httpOptions)
            .pipe(catchError(this.handleError<User>('addUser')));
        }
      })
    );
  }
}
