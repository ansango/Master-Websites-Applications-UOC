import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal';
import { Education } from 'src/app/shared/models/education';
import { Profile } from 'src/app/shared/models/profile';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  @Input() profile!: Profile;
  education!: Education[];
  selectedCertification!: Education;

  constructor(
    private profileService: ProfileService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getEducation();
  }

  getEducation(): void {
    this.profileService.getEducation().subscribe((education) => {
      this.education = education.filter((e: Education) => {
        return e.userId === this.profile.id;
      });
    });
  }

  onDelete(certificate: Education, idModal: string): void {
    this.selectedCertification = certificate;
    this.openModal(idModal);
  }

  openModal(idModal: string): void {
    this.modalService.open(idModal);
  }
  confirmModal(education: Education, idModal: string): void {
    this.closeModal(idModal);
    this.education = this.education.filter((edu) => edu !== education);
    this.profileService.deleteEducation(education).subscribe();
  }
  closeModal(id: string): void {
    this.modalService.close(id);
  }
}
