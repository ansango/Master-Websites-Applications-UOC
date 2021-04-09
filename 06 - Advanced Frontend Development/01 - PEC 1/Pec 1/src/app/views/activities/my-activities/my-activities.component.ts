import { Component, OnInit } from '@angular/core';
import { mergeAll } from 'rxjs/operators';
import { Activity, MyActivity } from 'src/app/shared/models/activity';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.css'],
})
export class MyActivitiesComponent implements OnInit {
  activities!: (Activity & { signedUp?: boolean })[];
  myActivities!: MyActivity[];
  selectedActivity!: (Activity & { signedUp?: boolean }) | undefined;

  activitiesParsed!: Activity[];

  constructor(private activityService: ActivityService) {}

  async ngOnInit(): Promise<void> {
    this.getActivities();
    this.getMyActivities();
  }

  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }

  getActivities(): void {
    this.activityService
      .getActivities()
      .subscribe((activities) => (this.activities = activities));
  }

  getMyActivities(): void {
    this.activityService
      .getMyActivities()
      .pipe(mergeAll())
      .subscribe((activity) => {
        const act = this.activities?.find((ac) => ac.id == activity.activityId);
        if (act) {
          act.signedUp = true;
        }
      });
    this.activityService
      .getMyActivities()
      .subscribe((myActivities) => (this.myActivities = myActivities));
  }

  cancelSubscription(activity: Activity) {
    const _activity = this.myActivities.filter((a) => {
      return a.activityId === activity.id;
    });

    this.activities = this.activities.filter((a) => {
      return a.id !== _activity[0].activityId;
    });

    this.myActivities = this.myActivities.filter((a) => {
      return a.activityId !== activity.id;
    });
    this.selectedActivity = undefined;
    this.activityService.cancelSubscription(_activity[0], activity).subscribe();
  }
}
