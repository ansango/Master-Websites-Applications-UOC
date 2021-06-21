import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CheckValidator } from 'src/app/Shared/Directives/checkValidator';
import { Location } from '@angular/common';
import { PublicFunctions } from 'src/app/Shared/Directives/publicFunctions';
import {
  activityLenguages,
  activityStates,
  activityCategories,
  CultureHeritageCategoryOptions,
  WineTourismCategoryOptions,
  BeachesCategoryOptions,
} from 'src/app/Shared/Enums/publicEnums';
import { Activity } from '../../models/activity';
import { UserState } from '../../../profile/reducers';
import { AppState } from '../../../app.reducers';
import { Store } from '@ngrx/store';
import * as ActivitiesAction from '../../actions';

@Component({
  selector: 'app-activity-admin-detail',
  templateUrl: './activity-admin-detail.component.html',
  styleUrls: ['./activity-admin-detail.component.css'],
})
export class ActivityAdminDetailComponent implements OnInit {
  userState$: UserState;
  activity: Activity;
  rForm: FormGroup;
  eActivityCategories = activityCategories;
  eActivityLenguages = activityLenguages;
  eActivityStates = activityStates;
  eCultureHeritageCategoryOptions = CultureHeritageCategoryOptions;
  eWineTourismCategoryOptions = WineTourismCategoryOptions;
  eBeachesCategoryOptions = BeachesCategoryOptions;
  eSubcategory: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<AppState>
  ) {
    // Se recoge el identificador de la actividad pasada por el navegador
    this.route.params.subscribe((params) => {
      const id = +params.id;
      this.store
        .select('activities')
        .subscribe(
          (activities) =>
            (this.activity = activities.activity.find((x) => x.id === id))
        );
      this.store
        .select('user')
        .subscribe((userStates) => (this.userState$ = userStates));
      this.loadFormInstance();
    });
  }

  ngOnInit(): void {}

  // Se carga la información de la actividad
  public loadFormInstance(): void {
    // En caso que se cree una nueva actividad
    if (this.activity === undefined) {
      // Se incicializa la colección
      this.activity = new Activity();
      this.activity.name = '';
      this.activity.category = null;
      this.activity.subcategory = null;
      this.activity.description = '';
      this.activity.language = null;
      this.activity.date = '';
      this.activity.price = 0;
      this.activity.miniumCapacity = 0;
      this.activity.limitCapacity = 0;
      this.activity.peopleRegistered = 0;
      this.activity.state = activityStates.Places_available;
      this.activity.signUpUsers = new Array<number>();
    } else {
      this.setEnumSubcategory(this.activity.category);
    }
    this.rForm = new FormGroup({
      name: new FormControl(this.activity.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(55),
      ]),
      category: new FormControl(this.activity.category, [Validators.required]),
      subcategory: new FormControl(this.activity.subcategory, [
        Validators.required,
      ]),
      description: new FormControl(this.activity.description),
      language: new FormControl(this.activity.language, [Validators.required]),
      date: new FormControl(this.activity.date, [
        CheckValidator.checkFormatDate,
      ]),
      price: new FormControl(this.activity.price, [
        Validators.required,
        CheckValidator.checkLessZero,
      ]),
      miniumCapacity: new FormControl(this.activity.miniumCapacity, [
        Validators.required,
        CheckValidator.checkLessZero,
      ]),
      limitCapacity: new FormControl(this.activity.limitCapacity, [
        Validators.required,
        CheckValidator.checkLessZero,
      ]),
      state: new FormControl(this.activity.state, [Validators.required]),
    });
  }

  // En función de la selección de la categoría, se carga un tipo de subcategoría
  setEnumSubcategory(value: string): any {
    if (value.includes(activityCategories.Culture_Heritage.toString())) {
      this.eSubcategory = CultureHeritageCategoryOptions;
    } else if (value.includes(activityCategories.Wine_tourism.toString())) {
      this.eSubcategory = WineTourismCategoryOptions;
    } else if (value.includes(activityCategories.Beaches.toString())) {
      this.eSubcategory = BeachesCategoryOptions;
    }
  }

  // Se recoge el cambio en el tipo de categoría
  onChangeCategoryValue(): void {
    this.setEnumSubcategory(this.rForm.get('category').value);
    this.rForm.controls.subcategory.setValue(null);
  }

  // En caso de seleccionar el botón de save del formulario
  public submit(): void {
    this.activity.name = this.rForm.get('name').value;
    this.activity.category = this.rForm.get('category').value;
    this.activity.subcategory = this.rForm.get('subcategory').value;
    this.activity.description = this.rForm.get('description').value;
    this.activity.language = this.rForm.get('language').value;
    this.activity.date = this.rForm.get('date').value;
    this.activity.price = this.rForm.get('price').value;
    this.activity.miniumCapacity = this.rForm.get('miniumCapacity').value;
    this.activity.limitCapacity = this.rForm.get('limitCapacity').value;
    // Se actualiza o se crea la actividad
    this.saveOrUpdate();
  }

  // Se guarda una nueva actividad
  public save() {
    const idLoggedUser = this.userState$.user?.id;
    let _activities$;
    this.store
      .select('activities')
      .subscribe((activities) => (_activities$ = activities.activity));
    // Persona que ha creado la solicitud
    this.activity.idUser = idLoggedUser;
    const _activity = PublicFunctions.fakeIncreaseId<Activity>(
      _activities$,
      this.activity
    );
    this.store.dispatch(
      ActivitiesAction.createActivity({ activity: _activity })
    );
    this.location.back();
  }

  // Se actualiza la actividad
  public update() {
    //const idLoggedUser = this.userService.getIdUser();
    this.store.dispatch(
      ActivitiesAction.updateActivity({ activity: this.activity })
    );
    this.location.back();
  }

  saveOrUpdate() {
    // Se invoca la función save o update en función de la respuesta de isNew
    this.isNew() ? this.save() : this.update();
  }

  // Función que devuelve existe el campo id en el objeto activity
  public isNew(): boolean {
    return !!!this.activity.id;
  }
}
