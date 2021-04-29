import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogout } from 'src/app/auth/state/auth.actions';
import {
  getUserType,
  isAuthenticated,
} from 'src/app/auth/state/auth.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  isAuthenticated$?: Observable<boolean>;
  userType$?: Observable<any>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(isAuthenticated);
    this.userType$ = this.store.select(getUserType);
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  onLogout = (event: Event) => {
    event.preventDefault();
    this.store.dispatch(autoLogout());
    this.onSidenavClose();
  };
}
