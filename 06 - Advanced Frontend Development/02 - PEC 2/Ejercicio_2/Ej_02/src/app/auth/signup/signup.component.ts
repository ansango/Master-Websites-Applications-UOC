import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { User, UserType } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.state';
import { signUpStart } from '../state/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  newUser!: User;
  registerForm!: FormGroup;
  options = Object.values(UserType);

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(55),
          ],
        ],
        lastName: [
          '',
          [
            Validators.minLength(3),
            Validators.maxLength(55),
            Validators.pattern(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/),
          ],
        ],
        type: [null, Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        rePassword: ['', [Validators.required]],
      },
      { validators: this.checkPasswordEqual }
    );
  }
  onSubmit() {
    const user: User = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      userType: this.registerForm.value.type,
    };

    this.store.dispatch(signUpStart({ user }));
  }

  checkPasswordEqual(group: FormGroup): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const rePass = group.get('rePassword')?.value;
    if (pass !== rePass) return { different: true };
    return null;
  }
}
