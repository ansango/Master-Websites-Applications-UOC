import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { updateProfileStart } from 'src/app/auth/state/auth.actions';
import { getUser, getUserType } from 'src/app/auth/state/auth.selectors';
import { User, UserNationality, UserType } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit, OnDestroy {
  user!: User;
  profileType$!: Observable<any>;
  profileForm!: FormGroup;
  profileSubscription$!: Subscription;
  nationalities = Object.values(UserNationality);
  selectedNatES?: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.profileSubscription$ = this.store
        .select(getUser)
        .subscribe((data) => {
          this.user = data;
          if (data.userType === UserType.COMPANY) {
            this.createFormCompany();
          } else {
            this.createFormTourist();
          }
        });
    });
    this.profileType$ = this.store.select(getUserType);
  }

  createFormCompany() {
    this.profileForm = this.formBuilder.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(55),
            Validators.pattern(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(55),
            Validators.pattern(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/),
          ],
        ],
        birthday: [''],
        phone: [0],
        nationality: [null, [Validators.required]],
        nif: [null, [Validators.required]],
        about: [null],
        companyName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(255),
            Validators.pattern(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/),
          ],
        ],
        companyDescription: [''],
        cif: ['', Validators.required],
      },
      { validators: this.checkNIF }
    );
    this.updateFormCompany();
  }

  createFormTourist() {
    this.profileForm = this.formBuilder.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(55),
            Validators.pattern(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(55),
            Validators.pattern(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/),
          ],
        ],
        birthday: [''],
        phone: [0],
        nationality: [null, [Validators.required]],
        nif: [null, [Validators.required]],
        about: [null],
      },
      { validators: this.checkNIF }
    );
    this.updateFormTourist();
  }

  updateFormCompany() {
    this.profileForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      birthday: this.user.birthday,
      phone: this.user.phone,
      nationality: this.user.nationality,
      nif: this.user.nif,
      about: this.user.about,
      companyName: this.user.companyName,
      companyDescription: this.user.companyDescription,
      cif: this.user.cif,
    });
  }

  updateFormTourist() {
    this.profileForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      birthday: this.user.birthday,
      phone: this.user.phone,
      nationality: this.user.nationality,
      nif: this.user.nif,
      about: this.user.about,
      companyName: this.user.companyName,
      companyDescription: this.user.companyDescription,
      cif: this.user.cif,
    });
  }

  selectNat(event: any): boolean {
    if (event.target.value === UserNationality)
      return (this.selectedNatES = true);
    return (this.selectedNatES = false);
  }

  checkNIF(group: FormGroup): ValidationErrors | null {
    const ES = group.get('nationality')?.value === 'es';
    const NIF = group.get('nif')?.value;
    const REG = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    if (ES === true && REG.test(NIF) === false) {
      return { errorNIF: true };
    } else {
      return null;
    }
  }

  onUpdate() {
    const id = this.user.id;
    const userType = this.user.userType;
    const user: User = {
      ...this.profileForm.value,
      id: id,
      userType: userType,
      password: this.user.password,
      email: this.user.email,
    };

    this.store.dispatch(updateProfileStart({ user }));
  }

  ngOnDestroy(): void {
    if (this.profileSubscription$) {
      this.profileSubscription$.unsubscribe();
    }
  }
}
