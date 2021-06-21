import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { CommonService } from 'src/app/Shared/Services/common.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityService extends CommonService {
  constructor(private http: HttpClient) {
    super();
    this.bRefreshMyActivities = new BehaviorSubject<boolean>(false);
    this.bRefreshFavorites = new BehaviorSubject<boolean>(false);
  }

  private activitiesUrl = 'api/activities'; // URL to web api
  private bRefreshMyActivities: BehaviorSubject<boolean>;
  private bRefreshFavorites: BehaviorSubject<boolean>;

  // Observable para refrescar las actividades en las que está registrado el usuario
  // logado.
  getRefreshMyAcitivities(): Observable<boolean> {
    return this.bRefreshMyActivities.asObservable();
  }
  setRefreshMyAcitivities(newValue: boolean): void {
    this.bRefreshMyActivities.next(newValue);
  }

  // Observable para refrescar las actividades favoritas
  // del usuario logado.
  getRefreshFavoriteActivities(): Observable<boolean> {
    return this.bRefreshFavorites.asObservable();
  }
  setRefreshFavoriteActivities(newValue: boolean): void {
    this.bRefreshFavorites.next(newValue);
  }
  /**
   * Función que devuelve la lista de actividades.
   * @return la lista de actividades
   */
  getActivities(): Observable<Activity[]> {
    return this.http
      .get<Activity[]>(this.activitiesUrl)
      .pipe(catchError(this.handleError<Activity[]>('getActivities')));


  }

  /**
   * Función que devuelve una actividad.
   * @param id - Identificador de la actividad
   * @return Observable<Activity>
   */
  getActivity(id: number): Observable<Activity> {
    const url = `${this.activitiesUrl}/${id}`;
    return this.http
      .get<Activity>(url)
      .pipe(catchError(this.handleError<Activity>(`getActivity id=${id}`)));
  }

  /**
   * Función que actualiza una actividad.
   * @param activity - actividad a actualizar
   * @return Observable<Activity>
   */
  updateActivity(activity: Activity): Observable<Activity> {
    return this.http
      .put(this.activitiesUrl, activity, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateActivity')));
  }

  /**
   * Función que añade una actividad.
   * @param activity - actividad a añadir
   * @return Observable<Activity>
   */
  addActivity(activity: Activity): Observable<Activity> {
    return this.http
      .post<Activity>(this.activitiesUrl, activity, this.httpOptions)
      .pipe(catchError(this.handleError<Activity>('addUser')));
  }

  /**
   * Función que elimina una actividad.
   * @param id - identificador de la actividad a eliminar
   * @return Observable<Activity>
   */
  deleteActivity(id: number): Observable<Activity> {
    const url = `${this.activitiesUrl}/${id}`;
    return this.http
      .delete<Activity>(url, this.httpOptions)
      .pipe(catchError(this.handleError<any>('deleteActivity')));
  }
}
