import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Activity, MyActivity } from 'src/app/shared/models/activity';
import { ActivityService } from 'src/app/shared/services/activity.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() activity?: Activity & { signedUp?: boolean };

  constructor(
    private userService: UserService,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {}

  get isLoggedIn(): boolean {
    return this.userService.isUserLogged();
  }

  get isTourist(): boolean {
    return this.userService.isUserTourist();
  }

  get isFavorite(): boolean {
    return this.activityService.isFavorite(this.activity!.id);
  }

  subscription(activity: Activity) {
    this.activityService
      .subscribeActivity(activity)
      .subscribe(() => (this.activity!.signedUp = true));
  }

  addFavorites(activity: Activity) {
    this.activityService.addFavorites(activity);
  }
}
