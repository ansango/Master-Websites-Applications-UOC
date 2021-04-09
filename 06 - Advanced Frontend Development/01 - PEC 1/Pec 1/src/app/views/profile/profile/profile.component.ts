import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal';
import { Education } from 'src/app/shared/models/education';
import { Profile } from 'src/app/shared/models/profile';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile!: Profile;
  education!: Education[];
  selectedCertification!: Education;
  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    const id = this.userService.getLocaleUser().id!;
    this.profileService
      .getProfile(id)
      .subscribe((profile) => (this.profile = profile));
  }
}
