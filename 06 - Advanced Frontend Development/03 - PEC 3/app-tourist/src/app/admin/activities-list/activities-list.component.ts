import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  deleteActivity,
  loadActivitiesAdmin,
} from 'src/app/activities/state/activities.actions';
import { getActByAdmin } from 'src/app/activities/state/activities.selectors';
import { getUserId } from 'src/app/auth/state/auth.selectors';

import { Activity } from 'src/app/models/activity';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css'],
})
export class ActivitiesListComponent implements OnInit {
  userId?: number = 0;
  activities$!: Observable<Activity[]>;
  panelOpenState = false;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.activities$ = this.store.select(getActByAdmin);
    this.store.select(getUserId).subscribe((id) => (this.userId = id));
    this.store.dispatch(loadActivitiesAdmin({ idUser: this.userId }));
  }

  onDelete(id?: number) {
    if (confirm('Are you sure you want to delete?') && id !== undefined) {
      this.store.dispatch(deleteActivity({ id }));
    }
  }
}
