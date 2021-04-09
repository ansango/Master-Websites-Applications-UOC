import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css'],
})
export class AdminDetailComponent implements OnInit {
  activity?: Activity;
  editActivityForm!: FormGroup;
  categories = Object.values(ActivityCategory);
  subCulture = Object.values(ActivitySubcategoryCulture);
  subWine = Object.values(ActivitySubcategoryWine);
  subBeach = Object.values(ActivitySubcategoryBeach);
  languages = Object.values(ActivityLanguage);
  ActivityCategory = ActivityCategory;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {
    this.editActivityForm = this.formBuilder.group({
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
    this.getActivity();
  }

  getActivity(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.activityService.getActivity(id).subscribe((activity) => {
      this.activity = activity;
      this.editActivityForm.patchValue({
        name: activity.name,
        category: activity.category,
        subcategory: activity.subcategory,
        description: activity.description,
        language: activity.language,
        date: activity.date,
        price: activity.price,
      });
    });
  }

  onSubmit(form: FormGroup): void {
    this.activityService
      .updateActivity({
        ...form.value,
        id: this.activity?.id,
      })
      .subscribe(() => this.router.navigate(['/admin']));
  }
}
