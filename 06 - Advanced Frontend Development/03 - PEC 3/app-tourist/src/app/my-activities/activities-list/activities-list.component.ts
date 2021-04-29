import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMyActivities } from 'src/app/activities/state/activities.actions';
import { getMyActivities } from 'src/app/activities/state/activities.selectors';
import { getUserId } from 'src/app/auth/state/auth.selectors';
import { Activity } from 'src/app/models/activity';
import { AppState } from 'src/app/store/app.state';
import { getSkeleton } from 'src/app/store/shared/shared.selectors';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css'],
})
export class ActivitiesListComponent implements OnInit {
  userId?: number = 0;
  activities$!: Observable<Activity[]>;
  activities!: Activity[];
  panelOpenState = false;
  isLoading$?: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getSkeleton);
    this.activities$ = this.store.select(getMyActivities);
    this.store.select(getUserId).subscribe((id) => (this.userId = id));
    this.store.dispatch(loadMyActivities({ idUser: this.userId }));
    this.activities$.subscribe((activities) => {
      this.activities = activities;
    });
  }
}
