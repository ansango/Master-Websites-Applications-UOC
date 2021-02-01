import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public message: string = '';
  public loginForm!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(loginForm: FormGroup) {
    if (loginForm.invalid) {
      this.message = 'CHECK ERRORS';
      console.log(this.message);
    } else {
      const username: string = loginForm.value.username;
      const password: string = loginForm.value.password;
      this.userService.login(username, password).subscribe(
        (resp) => {
          alert('Successfully logged in');
          this.message = resp.msg;
          this.router.navigate(['wine/list']);
        },
        (err) => {
          alert(`Error logging in ${err.error.msg}`);
          this.message = err.error.msg;
        }
      );
    }
  }
}
