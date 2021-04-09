import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Education,
  EducationTraining,
  EducationType,
  EducationUniversity,
} from 'src/app/shared/models/education';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-education-new-edit',
  templateUrl: './education-new-edit.component.html',
  styleUrls: ['./education-new-edit.component.css'],
})
export class EducationNewEditComponent implements OnInit {
  isEducation: boolean = false;
  education?: Education;
  educationId!: number;
  newEducation?: Education;
  newEducationForm!: FormGroup;
  types = Object.values(EducationType);
  university = Object.values(EducationUniversity);
  training = Object.values(EducationTraining);
  EducationType = EducationType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.newEducationForm = this.formBuilder.group({
      type: [null, [Validators.required]],
      level: [null, [Validators.required]],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
        ],
      ],
      school: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
        ],
      ],
      finishDate: [''],
    });
    this.getEducation();
  }

  getEducation(): void | boolean {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) this.isEducation = true;
    this.profileService.getEducationById(id).subscribe((education) => {
      this.education = education;
      this.newEducationForm.patchValue({
        type: education.type,
        level: education.level,
        name: education.name,
        school: education.school,
        finishDate: education.finishDate,
      });

      console.log(education);
    });
  }

  onSubmit(form: FormGroup) {
    const education = form.value;
    if (this.isEducation) this.updateEducation(education);
    this.createEducation(education);
  }

  createEducation(education: Education): void {
    this.profileService
      .postEducation(education)
      .subscribe(() => this.router.navigate(['/profile']));
  }

  updateEducation(education: Education): void {
    this.profileService
      .updateEducation(education)
      .subscribe(() => this.router.navigate(['/profile']));
  }
}
