import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/models/activity';
import { AppState } from 'src/app/store/app.state';
import { deleteFavorite } from '../state/favorites.actions';
import { getFavoriteById } from '../state/favorites.selectors';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  activity!: Activity;
  activitySubscription$!: Subscription;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.activitySubscription$ = this.store
        .select(getFavoriteById, { id })
        .subscribe((data) => {
          this.activity = data;
        });
    });
  }

  onDelete() {
    const id = this.activity.id;
    this.store.dispatch(deleteFavorite({ id }));
  }
}
