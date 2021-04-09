import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { filter, mergeAll, tap, toArray } from 'rxjs/operators';
import { Activity, MyActivity } from '../models/activity';
import { UserType } from '../models/user';
import { MessageService } from './message.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private urlActivities = 'api/activities';
  private readonly myActivitiesUrl = 'api/myActivities';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private userService: UserService
  ) {}

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.urlActivities);
  }

  getActivity(id: number): Observable<Activity> {
    const url = `${this.urlActivities}/${id}`;
    return this.http.get<Activity>(url);
  }

  getMyActivities(): Observable<MyActivity[]> {
    const currentUser = this.userService.getLocaleUser();
    return this.http.get<MyActivity[]>(this.myActivitiesUrl).pipe(
      mergeAll(),
      filter((activity) => activity.userId == currentUser.id),
      toArray()
    );
  }

  getFavorites(): Activity[] {
    return JSON.parse(localStorage.getItem('favorites')!) || [];
  }

  isFavorite(id: number) {
    const favorite = this.getFavorites().filter((fav) => {
      return fav.id === id;
    });
    if (favorite[0]) return true;
    return false;
  }

  postActivity(activity: Activity): Observable<Activity> {
    if (
      !this.userService.isUserLogged() ||
      this.userService.getLocaleUser().type == UserType.TOURIST
    )
      return throwError(403);
    console.log();
    activity.adminId = this.userService.getLocaleUser().id!;
    return this.http.post<Activity>(
      this.urlActivities,
      activity,
      this.httpOptions
    );
  }

  updateActivity(activity: Activity): Observable<any> {
    const adminId = this.userService.getLocaleUser().id!;
    activity.adminId = adminId;
    return this.http.put(this.urlActivities, activity, this.httpOptions);
  }

  deleteActivity(activity: Activity | number): Observable<Activity> {
    const id = typeof activity === 'number' ? activity : activity.id;
    const url = `${this.urlActivities}/${id}`;
    return this.http.delete<Activity>(url, this.httpOptions);
  }

  subscribeActivity(activity: Activity): Observable<MyActivity> {
    const currentUser = this.userService.getLocaleUser();
    const myActivity: MyActivity = {
      activityId: activity.id,
      userId: currentUser.id!,
    };
    activity.peopleRegistered += 1;
    this.updateActivity(activity).subscribe();
    return this.http.post<MyActivity>(
      this.myActivitiesUrl,
      myActivity,
      this.httpOptions
    );
  }

  cancelSubscription(
    myActivity: MyActivity,
    activity: Activity
  ): Observable<MyActivity> {
    const id = myActivity.id;
    const url = `${this.myActivitiesUrl}/${id}`;
    activity.peopleRegistered -= 1;
    this.updateActivity(activity).subscribe();
    return this.http.delete<MyActivity>(url, this.httpOptions);
  }

  addFavorites(activity: Activity) {
    const activities = this.getFavorites();
    activities.push(activity);
    localStorage.setItem('favorites', JSON.stringify(activities));
  }

  removeFavorite(activity: Activity) {
    const activities = this.getFavorites().filter((fav) => {
      return activity.id !== fav.id;
    });
    localStorage.setItem('favorites', JSON.stringify(activities));
  }
}
