import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addActivity } from 'src/app/activities/state/activities.actions';
import { getUserId } from 'src/app/auth/state/auth.selectors';
import {
  Activity,
  ActivityCategory,
  ActivityLanguage,
  ActivitySubcategoryBeach,
  ActivitySubcategoryCulture,
  ActivitySubcategoryWine,
} from 'src/app/models/activity';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css'],
})
export class AddActivityComponent implements OnInit {
  userId?: number;
  activityForm!: FormGroup;
  categories = Object.values(ActivityCategory);
  subCulture = Object.values(ActivitySubcategoryCulture);
  subWine = Object.values(ActivitySubcategoryWine);
  subBeach = Object.values(ActivitySubcategoryBeach);
  languages = Object.values(ActivityLanguage);
  ActivityCategory = ActivityCategory;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.activityForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(55),
      ]),
      category: new FormControl(null, [Validators.required]),
      subcategory: new FormControl(null, [Validators.required]),
      description: new FormControl(''),
      language: new FormControl(null, [Validators.required]),
      date: new FormControl(''),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
    });

    this.store.select(getUserId).subscribe((id) => (this.userId = id));
  }

  onAdd() {
    if (!this.activityForm.valid) {
      return;
    }
    const activity: Activity = {
      name: this.activityForm.value.name,
      category: this.activityForm.value.category,
      subcategory: this.activityForm.value.subcategory,
      description: this.activityForm.value.description,
      language: this.activityForm.value.language,
      date: this.activityForm.value.date,
      price: this.activityForm.value.price,
      peopleRegistered: 0,
      adminId: this.userId,
    };

    this.store.dispatch(addActivity({ activity }));
  }
}
