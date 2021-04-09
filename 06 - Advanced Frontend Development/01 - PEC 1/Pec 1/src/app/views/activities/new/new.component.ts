import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  Activity,
  ActivityCategory,
  ActivityLanguage,
  ActivitySubcategoryBeach,
  ActivitySubcategoryCulture,
  ActivitySubcategoryWine,
} from 'src/app/shared/models/activity';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  newActivity?: Activity;
  newActivityForm!: FormGroup;
  categories = Object.values(ActivityCategory);
  subCulture = Object.values(ActivitySubcategoryCulture);
  subWine = Object.values(ActivitySubcategoryWine);
  subBeach = Object.values(ActivitySubcategoryBeach);
  selectedCat: string = '';
  languages = Object.values(ActivityLanguage);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {
    this.newActivityForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
        ],
      ],
      category: [null, [Validators.required]],
      subcategory: [null, [Validators.required]],
      description: [''],
      language: [null, [Validators.required]],
      date: [''],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  selectedCategory(event: any): string {
    return (this.selectedCat = event.target.value.match('[a-zA-Z]+')[0]);
  }

  onSubmit(form: FormGroup) {
    const activity = form.value;
    this.activityService
      .postActivity(activity)
      .subscribe(() => this.router.navigate(['/']));
  }
}
