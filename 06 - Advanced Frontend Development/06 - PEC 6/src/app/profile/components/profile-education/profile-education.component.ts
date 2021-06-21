import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckValidator } from 'src/app/Shared/Directives/checkValidator';
import { PublicFunctions } from 'src/app/Shared/Directives/publicFunctions';
import { Education } from '../../models/education';
import {
  universityLevelTypes,
  cycleLevelTypes,
  educationTypes,
} from 'src/app/Shared/Enums/publicEnums';

import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { UserState } from '../../reducers';
import * as UserAction from '../../actions';

@Component({
  selector: 'app-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.css'],
})
export class ProfileEducationComponent {
  userState$: UserState;
  eEducationTypes = educationTypes;
  eLevelTypes: any;
  rForm: FormGroup;

  education: Education = {} as Education;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private store: Store<AppState>
  ) {
    // Se recoge el identificador de la educación pasada por el navegador (si se edita)
    this.route.params.subscribe((params) => {
      const uid = +params.uid;
      this.store
        .select('user')
        .subscribe((userState) => (this.userState$ = userState));
      this.education = this.userState$.user.educations.find(
        (education) => education.uid === uid
      );
      // Se carga la educación pasada por parámetro
      this.loadFormInstance();
    });
  }

  public loadFormInstance(): void {
    // En caso de creación de una nueva educación
    if (this.education === undefined) {
      // Se incicializa la colección
      this.education = new Education();
      this.education.type = null;
      this.education.level = null;
      this.education.name = '';
      this.education.university = '';
      this.education.finish = '';
    } else {
      // Se carga la enumeración con los tipos de nivel asociados a la educación
      this.setEnumLevelTypes(this.education.type);
    }
    this.rForm = new FormGroup({
      type: new FormControl(this.education.type, [Validators.required]),
      level: new FormControl(this.education.level, [Validators.required]),
      name: new FormControl(this.education.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(55),
      ]),
      university: new FormControl(this.education.university, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(55),
      ]),
      date: new FormControl(this.education.finish, [
        CheckValidator.checkFormatDate,
      ]),
    });
  }

  // Si se pulsa sobre guardar
  public submit(): void {
    this.education.type = this.rForm.get('type').value;
    this.education.level = this.rForm.get('level').value;
    this.education.name = this.rForm.get('name').value;
    this.education.university = this.rForm.get('university').value;
    this.education.finish = this.rForm.get('date').value;
    this.saveOrUpdate(this.education);
  }

  // Se guarda un nuevo tipo de educación
  public save(education: Education): void {
    const user = this.userState$.user;
    const _education = PublicFunctions.fakeIncreaseUid<Education>(
      user.educations,
      education
    );
    user.educations.push(_education);
    // Se actualiza el usuario
    this.store.dispatch(UserAction.addUserEducation({ user }));
  }

  // Se edita una educación
  public update(education: Education): void {
    const user = this.userState$.user;
    const educations = user.educations;
    const foundIndex = educations.findIndex(
      (_education) => _education.uid === education.uid
    );
    educations[foundIndex] = education;
    // Se actualiza el usuario
    this.store.dispatch(UserAction.updateUserEducation({ user }));
  }

  // Se recoge un cambio en el tipo de educación
  setEnumLevelTypes(value: string): any {
    if (value.includes(educationTypes.university.toString())) {
      this.eLevelTypes = universityLevelTypes;
    } else if (value.includes(educationTypes.cycle.toString())) {
      this.eLevelTypes = cycleLevelTypes;
    }
  }

  saveOrUpdate(education: Education) {
    // Se invoca la función save o update en función de la respuesta de isNew
    this.isNew() ? this.save(education) : this.update(education);
  }

  public isNew(): boolean {
    // Función que devuelve true si no existe el campo uid en el objeto language
    return !!!this.education.uid;
  }

  // Se recoge el cambio en el tipo de educación
  onChangeTypeValue(): void {
    this.setEnumLevelTypes(this.rForm.get('type').value);
    this.rForm.controls.level.setValue(null);
  }
}
