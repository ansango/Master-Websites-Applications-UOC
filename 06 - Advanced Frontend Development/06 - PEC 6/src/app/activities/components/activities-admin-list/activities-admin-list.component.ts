import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Activity } from '../../models/activity';

import { AppState } from '../../../app.reducers';
import { Store } from '@ngrx/store';
import { ActivityListState } from '../../reducers';
import * as ActivitiesAction from '../../actions';
import { UserState } from '../../../profile/reducers';

@Component({
  selector: 'app-activities-admin-list',
  templateUrl: './activities-admin-list.component.html',
  styleUrls: ['./activities-admin-list.component.css'],
})
export class ActivitiesAdminListComponent implements OnInit {
  activitiesListState$: ActivityListState;
  userState$: UserState;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private store: Store<AppState>
  ) {
    this.store
      .select('activities')
      .subscribe((activities) => (this.activitiesListState$ = activities));
    this.store
      .select('user')
      .subscribe((userStates) => (this.userState$ = userStates));
  }

  ngOnInit(): void {
    const idUser = this.userState$.user?.id;
    this.store.dispatch(ActivitiesAction.getActivitiesAdmin({ idUser }));
  }

  /**
   * Se recoge la pulsación sobre el botón de borrar idioma
   * @param activityId - identificador de la actividad a borrar
   */
  onClickDeleteActivity(activity: Activity): void {
    if (confirm('Are you sure to delete this activity?')) {
      this.store.dispatch(ActivitiesAction.deleteActivity({ activity }));
    }
  }
}
