import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogin } from './auth/state/auth.actions';
import { AppState } from './store/app.state';
import {
  getErrorMessage,
  getSpinner,
  getSuccessMessage,
} from './store/shared/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-tourist';
  showLoading?: Observable<boolean>;
  errorMessage?: Observable<string>;
  successMessage?: Observable<string>;
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.showLoading = this.store.select(getSpinner);
    this.errorMessage = this.store.select(getErrorMessage);
    this.successMessage = this.store.select(getSuccessMessage);
    this.store.dispatch(autoLogin());
  }
}
