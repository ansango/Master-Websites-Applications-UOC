import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/activity';
import { AppState } from 'src/app/store/app.state';
import { getSkeleton } from 'src/app/store/shared/shared.selectors';
import { loadFavorites } from '../state/favorites.actions';
import { getFavorites } from '../state/favorites.selectors';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css'],
})
export class ActivitiesListComponent implements OnInit {
  favorites$!: Observable<Activity[]>;
  favorites!: Activity[];
  displayedColumns: string[] = ['name', 'category', 'price', 'date', 'actions'];
  isLoading$?: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getSkeleton);
    this.favorites$ = this.store.select(getFavorites);
    this.store.dispatch(loadFavorites());
    this.favorites$.subscribe((favorites) => {
      this.favorites = favorites;
    });
  }
}
