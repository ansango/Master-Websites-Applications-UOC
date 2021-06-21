import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  languageLevels,
  activityLenguages,
} from 'src/app/Shared/Enums/publicEnums';
import { Language } from '../../models/language';
import { CheckValidator } from 'src/app/Shared/Directives/checkValidator';
import { PublicFunctions } from 'src/app/Shared/Directives/publicFunctions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { UserState } from '../../reducers';
import * as UserAction from '../../actions';

@Component({
  selector: 'app-profile-language',
  templateUrl: './profile-language.component.html',
  styleUrls: ['./profile-language.component.css'],
})
export class ProfileLanguageComponent {
  userState$: UserState;
  eLanguageLevels = languageLevels;
  eActivityLenguages = activityLenguages;
  rForm: FormGroup;
  language: Language = {} as Language;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private store: Store<AppState>
  ) {
    // Se recoge el identificador del lenguage pasado por el navegador (si se edita)
    this.route.params.subscribe((params) => {
      const uid = +params.uid;
      this.store
        .select('user')
        .subscribe((userState) => (this.userState$ = userState));
      this.language = this.userState$.user.languages.find(
        (language) => language.uid === uid
      );
      // Se carga la información del lenguage
      this.loadFormInstance();
    });
  }

  public loadFormInstance(): void {
    // En caso de creación de un nuevo lenguaje
    if (this.language === undefined) {
      // Se incicializa la colección
      this.language = new Language();
      this.language.finish = '';
      this.language.level = null;
      this.language.language = null;
    }
    this.rForm = new FormGroup({
      date: new FormControl(this.language.finish, [
        CheckValidator.checkFormatDate,
      ]),
      level: new FormControl(this.language.level, [Validators.required]),
      language: new FormControl(this.language.language, [Validators.required]),
    });
  }

  // Se guarda el lenguaje
  public submit(): void {
    this.language.level = this.rForm.get('level').value;
    this.language.language = this.rForm.get('language').value;
    this.language.finish = this.rForm.get('date').value;
    this.saveOrUpdate(this.language);
  }

  // En caso de creación de un nuevo lenguaje
  public save(language: Language) {
    if (
      !this.userState$.user.languages.find(
        (x) => x.language === language.language
      )
    ) {
      const user = this.userState$.user;
      const _language = PublicFunctions.fakeIncreaseUid<Language>(
        user.languages,
        language
      );
      user.languages.push(_language);
      // Se actualiza el usuario
      this.store.dispatch(UserAction.addUserLanguage({ user }));
    } else {
      alert('The language already exists!');
    }
  }

  // Se actualiza el lenguaje
  public update(language: Language): void {
    const user = this.userState$.user;
    const languages = user.languages;
    const foundIndex = languages.findIndex(
      (languageEl) => languageEl.uid === language.uid
    );
    languages[foundIndex] = language;

    this.store.dispatch(UserAction.updateUserLanguage({ user }));
  }

  saveOrUpdate(language: Language): void {
    // Se invoca la función save o update en función de la respuesta de isNew
    this.isNew() ? this.save(language) : this.update(language);
  }

  public isNew(): boolean {
    return !!!this.language.uid;
  }
}
