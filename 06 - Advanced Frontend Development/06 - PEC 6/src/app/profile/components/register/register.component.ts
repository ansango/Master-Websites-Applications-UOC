import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../models/user';
import { CheckValidator } from 'src/app/Shared/Directives/checkValidator';
import { userTypes } from 'src/app/Shared/Enums/publicEnums';
import { Router } from '@angular/router';
import { Language } from '../../models/language';
import { Education } from '../../models/education';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { LoginState } from '../../../login/reducers';
import * as LoginAction from '../../../login/actions';
import { UserState } from '../../reducers';
import * as UserAction from '../../actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loginState$: LoginState;
  userState$: UserState;

  eUserTypes = userTypes;

  public user: User;
  // Se declara un formControl por cada entrada del formulario
  public name: FormControl;
  public surname: FormControl;
  public type: FormControl;
  public email: FormControl;
  public password: FormControl;
  public password2: FormControl;
  public registerForm: FormGroup;
  public errorRegister: any;
  public bSubmitted: boolean;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    public router: Router
  ) {
    this.store.select('login').subscribe((login) => (this.loginState$ = login));
    this.store.select('user').subscribe((userState) => {
      this.userState$ = userState;
      if (userState.user !== null && !this.loginState$.loggedIn) {
        const credentials = {
          email: userState.user?.profile.email,
          password: userState.user?.profile.password,
        };
        this.store.dispatch(LoginAction.login({ credentials }));
      }
    });
  }

  ngOnInit(): void {
    this.bSubmitted = false;
    // Al inicializar el componente se registran los formControl
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(55),
      Validators.pattern('[a-zA-Z áéíóúÁÉÍÓÚÑñÇç]*'),
    ]);
    this.surname = new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(55),
      Validators.pattern('[a-zA-Z áéíóúÁÉÍÓÚÑñÇç]*'),
    ]);
    this.type = new FormControl(null, [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.password2 = new FormControl('', [Validators.required]);
    // Y se agrupan en el formGroup
    this.registerForm = this.formBuilder.group(
      {
        name: this.name,
        surname: this.surname,
        type: this.type,
        email: this.email,
        password: this.password,
        password2: this.password2,
      },
      { validator: CheckValidator.equalValue('password', 'password2') }
    );
  }

  public userRegister() {
    this.bSubmitted = true;
    // Se inicializa la clase User
    this.user = new User();
    this.user.profile.type = this.type.value;
    this.user.profile.name = this.name.value.trim();
    this.user.profile.surname = this.surname.value.trim();
    this.user.profile.email = this.email.value;
    this.user.profile.password = this.password.value;
    this.user.profile.birthDate = '';

    this.user.educations = new Array<Education>();
    this.user.languages = new Array<Language>();

    this.store.dispatch(UserAction.createUser({ user: this.user }));
  }
}
