import { Component, OnInit } from '@angular/core';
import { mergeAll } from 'rxjs/operators';
import { Activity } from 'src/app/shared/models/activity';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  activities!: (Activity & { signedUp?: boolean })[];
  selectedActivity!: Activity & { signedUp?: boolean };
  isFavorite?: boolean;
  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
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
  }
}
