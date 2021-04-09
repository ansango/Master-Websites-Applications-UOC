import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  filter,
  first,
  map,
  mergeAll,
  mergeMap,
  switchMap,
  toArray,
} from 'rxjs/operators';
import { Activity, MyActivity } from '../models/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private urlActivities = 'api/activities';
  private urlMyActivities = 'api/myActivities';
  constructor(private http: HttpClient) {}

  getActivity(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.urlActivities}/${id}`);
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.urlActivities);
  }

  getAdminActivities(adminId: number) {
    return this.http.get<Activity[]>(
      `${this.urlActivities}?adminId=${adminId}`
    );
  }

  postActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(
      this.urlActivities,
      activity,
      this.httpOptions
    );
  }

  updateActivity(activity: Activity): Observable<Activity> {
    const url = `${this.urlActivities}/${activity.id}`;
    return this.http.put<Activity>(url, activity, this.httpOptions);
  }

  deleteActivity(id: number): Observable<{}> {
    const url = `${this.urlActivities}/${id}`;
    return this.http.delete<Activity>(url, this.httpOptions);
  }

  getMyActivities(id: number): Observable<Activity[]> {
    return this.http
      .get<MyActivity[]>(`${this.urlMyActivities}?userId=${id}`)
      .pipe(
        mergeAll(),
        mergeMap((activity) => this.getActivity(activity.activityId)),
        toArray()
      );
  }

  getFavorites(): Activity[] {
    return JSON.parse(localStorage.getItem('favorites')!) || [];
  }

  addFavorites(activity: Activity) {
    const activities = this.getFavorites();
    activities.push(activity);
    localStorage.setItem('favorites', JSON.stringify(activities));
  }

  deleteFavorite(id?: number) {
    const activities = this.getFavorites().filter((fav) => {
      return id !== fav.id;
    });
    localStorage.setItem('favorites', JSON.stringify(activities));
  }

  addSubscription(id: number, idUser: number): Observable<Activity> {
    const myActivity: MyActivity = {
      activityId: id,
      userId: idUser,
    };
    return this.http
      .post<MyActivity>(this.urlMyActivities, myActivity, this.httpOptions)
      .pipe(
        mergeMap((myActivity) => this.getActivity(myActivity.activityId)),
        mergeMap((activity) => {
          return this.http
            .put<Activity>(
              `${this.urlActivities}/${activity.id}`,
              {
                ...activity,
                peopleRegistered: activity.peopleRegistered! + 1,
              },
              this.httpOptions
            )
            .pipe(
              map(() => ({
                ...activity,
                peopleRegistered: activity.peopleRegistered! + 1,
              }))
            );
        })
      );
  }

  unSubscribeActivity(
    activityId?: number,
    userId?: number
  ): Observable<Activity> {
    return this.http
      .get<MyActivity[]>(
        `${this.urlMyActivities}?activityId=${activityId}&userId=${userId}`
      )
      .pipe(
        first(),
        mergeMap((myActivity) =>
          this.http.delete<MyActivity>(
            `${this.urlMyActivities}/${myActivity[0].id}`,
            this.httpOptions
          )
        ),
        mergeMap(() => this.getActivity(activityId!)),
        mergeMap((activity) => {
          return this.http
            .put<Activity>(
              `${this.urlActivities}/${activity.id}`,
              {
                ...activity,
                peopleRegistered: activity.peopleRegistered! - 1,
              },
              this.httpOptions
            )
            .pipe(
              map(() => ({
                ...activity,
                peopleRegistered: activity.peopleRegistered! - 1,
              }))
            );
        })
      );
  }
}
