import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/activity';
import { AppState } from 'src/app/store/app.state';
import { loadFavorites } from '../state/favorites.actions';
import { getFavorites } from '../state/favorites.selectors';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css'],
})
export class ActivitiesListComponent implements OnInit {
  favorites$!: Observable<Activity[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.favorites$ = this.store.select(getFavorites) ;
    this.store.dispatch(loadFavorites());
  }
}
