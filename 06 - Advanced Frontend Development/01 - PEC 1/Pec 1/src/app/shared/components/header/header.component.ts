import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  get isLoggedIn(): boolean {
    return this.userService.isUserLogged();
  }

  get isTourist(): boolean {
    return this.userService.isUserTourist();
  }

  get isCompany(): boolean {
    return this.userService.isUserCompany();
  }

  logOut(): void {
    this.userService.logout();
  }
}
