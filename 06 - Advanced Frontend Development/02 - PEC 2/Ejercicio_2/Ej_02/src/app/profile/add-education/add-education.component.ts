import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getUserId } from 'src/app/auth/state/auth.selectors';
import {
  Education,
  EducationTraining,
  EducationType,
  EducationUniversity,
} from 'src/app/models/education';
import { AppState } from 'src/app/store/app.state';
import { addEducation } from '../state/profile.actions';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css'],
})
export class AddEducationComponent implements OnInit {
  userId?: number;
  educationForm!: FormGroup;
  types = Object.values(EducationType);
  university = Object.values(EducationUniversity);
  training = Object.values(EducationTraining);
  EducationType = EducationType;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.createForm();
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
  }

  onAdd() {
    if (!this.educationForm.valid) {
      return;
    }

    const education: Education = {
      type: this.educationForm.value.type,
      level: this.educationForm.value.level,
      name: this.educationForm.value.name,
      school: this.educationForm.value.school,
      finishDate: this.educationForm.value.finishDate,
      userId: this.userId,
    };

    this.store.dispatch(addEducation({ education }));
  }
}
