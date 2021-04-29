import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { deleteSubscription } from 'src/app/activities/state/activities.actions';
import { getMyActivityId } from 'src/app/activities/state/activities.selectors';
import { getUserId } from 'src/app/auth/state/auth.selectors';
import { Activity } from 'src/app/models/activity';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  activity!: Activity;
  userId: number = 0;
  activitySubscription$!: Subscription;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.activitySubscription$ = this.store
        .select(getMyActivityId, { id })
        .subscribe((data) => {
          this.activity = data;
        });
    });
    this.store.select(getUserId).subscribe((userId) => (this.userId = userId));
    document.getElementById('view-child')!.scrollIntoView();
  }

  onDeleteSubscribe() {
    const id = this.activity.id;
    this.store.dispatch(deleteSubscription({ id, userId: this.userId }));
  }
}
