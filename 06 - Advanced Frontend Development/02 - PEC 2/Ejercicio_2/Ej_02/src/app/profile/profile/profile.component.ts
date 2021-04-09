import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser, getUserType } from 'src/app/auth/state/auth.selectors';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile$!: Observable<User>;
  profileType$!: Observable<any>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.profile$ = this.store.select(getUser);
    this.profileType$ = this.store.select(getUserType);
  }
}
