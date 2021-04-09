import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import {
  setErrorMessage,
  setSuccessMessage,
} from '../store/shared/shared.actions';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messageOK: string = '';
  messageErr: string = '';
  constructor(private store: Store<AppState>) {}

  resetMessages() {
    this.messageErr = '';
    this.messageOK = '';
  }

  setMessageErr(message: string) {
    this.messageErr = message;
  }

  getMessageErr() {
    return this.messageErr;
  }

  setMessageOK(message: string) {
    this.messageOK = message;
  }

  getMessageOK() {
    return this.messageOK;
  }

  alertDispatch(status: string) {
    switch (status) {
      case 'err':
        this.store.dispatch(setErrorMessage({ message: this.getMessageErr() }));
        break;
      case 'ok':
        this.store.dispatch(
          setSuccessMessage({ message: this.getMessageOK() })
        );
        this.autoReset('ok');
        break;
      case 'reset':
        this.store.dispatch(setErrorMessage({ message: '' }));
        this.store.dispatch(setSuccessMessage({ message: '' }));
        break;
      case 'resetErr':
        this.store.dispatch(setErrorMessage({ message: '' }));
        break;
      case 'resetOk':
        this.store.dispatch(setSuccessMessage({ message: '' }));
        break;
      default:
        break;
    }
  }

  autoReset(status: string) {
    setTimeout(() => {
      if (status === 'ok') {
        this.store.dispatch(setSuccessMessage({ message: '' }));
      }
      if (status === 'ko') {
        this.store.dispatch(setErrorMessage({ message: '' }));
      }
    }, 5000);
  }
}
