import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FilterType } from 'src/app/Shared/Enums/publicEnums';

import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Activity } from '../../models/activity';
import { ActivityListState } from '../../reducers';
import * as ActivitiesAction from '../../actions';
import { UserState } from '../../../profile/reducers';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  public activities: Activity[];
  public selectedActivity: Activity;
  public eFilterType: FilterType;

  activitiesListState$: ActivityListState;
  userState$: UserState;

  constructor(private route: ActivatedRoute, private store: Store<AppState>)
  {
    this.store.select('user').subscribe(user => this.userState$ = user);
    this.store.select('activities').subscribe(activities => this.activitiesListState$ = activities);
  }

  onSignUpActivity(activity) {
    this.store.dispatch(ActivitiesAction.signUpActivity({activity}));
  }

  onDeleteSignUpActivity(activity) {
    this.store.dispatch(ActivitiesAction.unregisterActivity({activity}));
    // Se fuerza el refresco
    const idUser = this.userState$.user?.id;
    // Se filtran las actividades a las que el usuario está apuntado
    this.store.dispatch(ActivitiesAction.getUserActivities({idUser}));
  }

  onDeleteFavorites(activity) {
    // Se fuerza el refresco
    const idFavoriteUserActivities = this.userState$.user?.profile.favorites;
    // Se filtran las actividades favoritas del usuario logado
    this.store.dispatch(ActivitiesAction.getFavoriteUserActivities({idFavoriteUserActivities}));
  }

  ngOnInit(): void {
    if (this.route.snapshot.url[0].path === 'activity-list-user')
    {
      // Se actualiza la variable eFilterType (se pasará por parámetro @input al componente activity-detail)
      this.eFilterType = FilterType.favoritesFilter;
      const idFavoriteUserActivities = this.userState$.user?.profile.favorites;
      // Se filtran las actividades favoritas del usuario logado
      this.store.dispatch(ActivitiesAction.getFavoriteUserActivities({idFavoriteUserActivities}));
    }
    // Si se pasa en la URL el identificador de usuario se invoca la función getUserActivities
    else if (this.route.snapshot.paramMap.get('id') !== null)
    {
      // Se actualiza la variable eFilterType (se pasará por parámetro @input al componente activity-detail)
      this.eFilterType = FilterType.myActivitiesFilter;
      const idUser = this.userState$.user?.id;
      this.store.dispatch(ActivitiesAction.getUserActivities({idUser}));
    }
    else
    {
      // Se obtiene la lista de actividades sin filtro
      this.store.dispatch(ActivitiesAction.getAllActivities());
    }
  }

  // Se invonca la función al seleccionar una actividad de la lista
  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }
}
