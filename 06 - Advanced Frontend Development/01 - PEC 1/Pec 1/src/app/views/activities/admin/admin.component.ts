import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/components/modal';
import { Activity } from 'src/app/shared/models/activity';
import { ActivityService } from 'src/app/shared/services/activity.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  activities!: Activity[];
  selectedActivity!: Activity;

  constructor(
    private activityService: ActivityService,
    private userService: UserService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    const currentUser = this.userService.getLocaleUser();
    this.activityService.getActivities().subscribe((activities) => {
      this.activities = activities.filter(
        (act) => act.adminId === currentUser.id
      );
    });
  }

  onDelete(activity: Activity, idModal: string): void {
    this.selectedActivity = activity;
    this.openModal(idModal);
  }

  openModal(id: string): void {
    this.modalService.open(id);
  }

  confirmModal(activity: Activity, idModal: string): void {
    this.closeModal(idModal);
    this.activities = this.activities.filter((act) => act !== activity);
    this.activityService.deleteActivity(activity).subscribe();
  }

  closeModal(id: string): void {
    this.modalService.close(id);
  }
}
