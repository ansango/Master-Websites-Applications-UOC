import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserId } from 'src/app/auth/state/auth.selectors';
import { Activity } from 'src/app/models/activity';
import { AppState } from 'src/app/store/app.state';
import { getSkeleton } from 'src/app/store/shared/shared.selectors';
import { loadActivities, loadMyActivities } from '../state/activities.actions';
import { getActivities } from '../state/activities.selectors';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css'],
})
export class ActivitiesListComponent implements OnInit {
  isLoading$?: Observable<boolean>;
  userId?: number = 0;
  activities$!: Observable<Activity[]>;
  activities!: Activity[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getSkeleton);
    this.store.select(getUserId).subscribe((id) => (this.userId = id));
    this.activities$ = this.store.select(getActivities);
    this.store.dispatch(loadActivities());
    this.store.dispatch(loadMyActivities({ idUser: this.userId }));
    this.activities$.subscribe((activities) => {
      this.activities = activities;
    });
  }
}
