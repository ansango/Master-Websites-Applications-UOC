import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getUserId } from 'src/app/auth/state/auth.selectors';
import {
  Education,
  EducationTraining,
  EducationType,
  EducationUniversity,
} from 'src/app/models/education';
import { AppState } from 'src/app/store/app.state';
import { updateEducation } from '../state/profile.actions';
import { getEducationById } from '../state/profile.selectors';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
})
export class EditEducationComponent implements OnInit, OnDestroy {
  userId?: number;
  education!: Education;
  educationSubscription$!: Subscription;
  educationForm!: FormGroup;
  types = Object.values(EducationType);
  university = Object.values(EducationUniversity);
  training = Object.values(EducationTraining);
  EducationType = EducationType;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.educationSubscription$ = this.store
        .select(getEducationById, { id })
        .subscribe((data) => {
          this.education = data;
          this.createForm();
        });
    });

    this.store.select(getUserId).subscribe((id) => (this.userId = id));
  }

  createForm() {
    this.educationForm = new FormGroup({
      type: new FormControl(null, [Validators.required]),
      level: new FormControl(null, [Validators.required]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(55),
      ]),
      school: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(55),
      ]),
      finishDate: new FormControl(''),
    });

    this.updateForm();
  }

  updateForm() {
    this.educationForm.patchValue({
      type: this.education.type,
      level: this.education.level,
      name: this.education.name,
      school: this.education.school,
      finishDate: this.education.finishDate,
    });
  }

  onUpdate() {
    if (!this.educationForm.valid) {
      return;
    }

    const education: Education = {
      ...this.education,
      type: this.educationForm.value.type,
      level: this.educationForm.value.level,
      name: this.educationForm.value.name,
      school: this.educationForm.value.school,
      finishDate: this.educationForm.value.finishDate,
    };

    this.store.dispatch(updateEducation({ education }));
  }

  ngOnDestroy(): void {
    if (this.educationSubscription$) {
      this.educationSubscription$.unsubscribe();
    }
  }
}
