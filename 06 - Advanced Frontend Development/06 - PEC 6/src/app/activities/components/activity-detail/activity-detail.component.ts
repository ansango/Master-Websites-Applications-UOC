import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  OnChanges,
} from '@angular/core';
import { Activity } from '../../models/activity';
import {
  userTypes,
  activityStates,
  FilterType,
} from 'src/app/Shared/Enums/publicEnums';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { UserState } from '../../../profile/reducers';
import * as UserAction from '../../../profile/actions';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
})
export class ActivityDetailComponent implements OnInit {
  @Input() activity: Activity;
  @Input() eFilterType: FilterType;

  @Output() signUpActivity = new EventEmitter<any>();
  @Output() deleteSignUpActivity = new EventEmitter<any>();
  @Output() deleteFavorites = new EventEmitter<any>();

  userState$: UserState;

  rForm: FormGroup;
  idActivitiesUserFavorites: number[];

  constructor(public router: Router, private store: Store<AppState>) {
    this.store.select('user').subscribe((user) => (this.userState$ = user));
  }

  ngOnInit(): void {}

  ngOnChanges() {
    // Se carga la información de la actividad (@Input activity) pasada desde el componente activity-list
    this.loadFormInstance();
  }

  public loadFormInstance(): void {
    this.rForm = new FormGroup({
      name: new FormControl(this.activity?.name),
      category: new FormControl(this.activity?.category),
      subcategory: new FormControl(this.activity?.subcategory),
      description: new FormControl(this.activity?.description),
      language: new FormControl(this.activity?.language),
      date: new FormControl(this.activity?.date),
      price: new FormControl(this.activity?.price),
      miniumCapacity: new FormControl(this.activity?.miniumCapacity),
      limitCapacity: new FormControl(this.activity?.limitCapacity),
      peopleRegistered: new FormControl(this.activity?.peopleRegistered),
      state: new FormControl(this.activity?.state),
      myActivitySignUpVisible: new FormControl(false),
      saveFavoritesVisible: new FormControl(false),
      deleteFavoritesVisible: new FormControl(false),
      myActivityDeleteVisible: new FormControl(false),
    });
    this.displayTouristOptions();
  }

  displayTouristOptions(): void {
    const idLoggedUser = this.userState$.user?.id;

    const user = this.getParsedUser();
    const view = this.getParsedView();
    const activity = this.getParsedActivity(idLoggedUser);

    if (user && user.isTourist) {
      this.idActivitiesUserFavorites = user.favorites;
      const isFavorite = this.isFavorite(user.favorites);

      if (view === 'myActivities') {
        this.setButton('myActivities', 'delete');
      } else if (view === 'favorites') {
        this.setButton('favorites', 'delete');
      } else {
        if (activity.notFull && !activity.userSigned) {
          this.setButton('myActivities', 'add');
        }
        if (!isFavorite) {
          this.setButton('favorites', 'add');
        }
      }
    }
  }

  getParsedUser(): any | null {
    const isNotNull = this.userState$.user !== null;
    if (isNotNull) {
      return {
        id: this.userState$.user?.id,
        isTourist:
          this.userState$.user?.profile.type === userTypes.Tourist.toString(),
        favorites: this.userState$.user?.profile.favorites,
      };
    } else {
      return null;
    }
  }

  getParsedView(): string {
    if (this.eFilterType === FilterType.myActivitiesFilter.toString()) {
      return 'myActivities';
    } else if (this.eFilterType === FilterType.favoritesFilter.toString()) {
      return 'favorites';
    }
  }

  getParsedActivity(idUser: number): any | null {
    if (this.activity) {
      return {
        notFull: this.activity.peopleRegistered < this.activity.limitCapacity,
        userSigned: this.activity.signUpUsers.includes(idUser),
      };
    } else {
      return null;
    }
  }

  setButton(view: string, action: string): void {
    if (view === 'myActivities' && action === 'delete') {
      this.rForm.controls.myActivityDeleteVisible.setValue(true);
    } else if (view === 'favorites' && action === 'delete') {
      this.rForm.controls.deleteFavoritesVisible.setValue(true);
    } else if (view === 'myActivities' && action === 'add') {
      this.rForm.controls.myActivitySignUpVisible.setValue(true);
    } else if (view === 'favorites' && 'add') {
      this.rForm.controls.saveFavoritesVisible.setValue(true);
    }
  }

  isFavorite(activitiesId: number[]): boolean {
    const foundIndex = activitiesId.findIndex((x) => x === this.activity.id);
    if (foundIndex !== -1) {
      return true;
    } else {
      return false;
    }
  }

  // Se recoge la pulsación sobre el botón de logout
  onClickSignUP(): void {
    const idLoggedUser = this.userState$.user?.id;
    // Se comprueba que el usuario no esté apuntado a la actividad
    if (this.activity.signUpUsers.includes(idLoggedUser)) {
      alert('The user is already signed up for the activity');
    } else {
      this.activity.signUpUsers.push(idLoggedUser);
      this.activity.peopleRegistered = this.activity.peopleRegistered + 1;
      this.rForm.controls.peopleRegistered.setValue(
        this.activity.peopleRegistered
      );
      // Si se alcanza el número máximo de persona aputadas se cambia el estado de la actividad
      if (this.activity.peopleRegistered === this.activity.limitCapacity) {
        this.activity.state = activityStates.Complete;
      }
      // Se cambia la visibilidad de los botones
      this.rForm.controls.myActivitySignUpVisible.setValue(false);
      // Se emite el evento
      this.signUpActivity.emit(this.activity);
    }
  }

  onClickSaveFavorites(): void {
    const user = this.getParsedUser();
    const isFavorite = this.isFavorite(user.favorites);
    if (!isFavorite) {
      // Se añade la actividad en la lista de favoritos del usuario
      this.idActivitiesUserFavorites.push(this.activity.id);
      // Se guarda la información en la memoria local
      this.store.dispatch(
        UserAction.setFavoriteUserActivitiesStorage({
          user: this.userState$.user,
          favoriteActivitiesUser: this.idActivitiesUserFavorites,
        })
      );
    }
    // Se esconde el botón favorites
    this.rForm.controls.saveFavoritesVisible.setValue(false);
  }

  // Se recoge la pulsación sobre el botón de delete favorites
  onClickDeleteFavorites(): void {
    // Se borra la actividad del listado de favoritos del usuario
    // Si no se encuentra la actividad en el array de actividades favoritas del usuario
    const foundIndex = this.idActivitiesUserFavorites.findIndex(
      (x) => x === this.activity.id
    );
    if (foundIndex !== -1) {
      // Se quita la actividad de la lista de favoritos del usuario
      this.idActivitiesUserFavorites.splice(foundIndex, 1);
      // Se guarda la información en la memoria local
      // Se guarda la información en la memoria local
      this.store.dispatch(
        UserAction.setFavoriteUserActivitiesStorage({
          user: this.userState$.user,
          favoriteActivitiesUser: this.idActivitiesUserFavorites,
        })
      );
    }
    // Se borra la información del detalle de la actividad
    this.activity = null;
    this.deleteFavorites.emit(this.activity);
  }

  // Se recoge la pulsación sobre el botón de delete
  onClickDelete(): void {
    if (confirm('Are you sure to unsubscribe from this activity?')) {
      const idLoggedUser = this.userState$.user?.id;

      const index = this.activity.signUpUsers.findIndex(
        (idUser) => idUser === idLoggedUser
      );
      if (index === -1) {
        alert('Error user not found');
        return;
      }
      this.activity.signUpUsers.splice(index, 1);
      // Se resta uno al contador de personas registradas en la actividad
      this.activity.peopleRegistered = this.activity.peopleRegistered - 1;
      // Si se desregistra de la actividad un usuario, se comprueba que la actividad no estuviese completa
      if (this.activity.state === activityStates.Complete) {
        this.activity.state = activityStates.Places_available;
      }
      // Se emite el evento
      this.deleteSignUpActivity.emit(this.activity);
      // Se borra la información del detalle de la actividad
      this.activity = null;
    }
  }
}
