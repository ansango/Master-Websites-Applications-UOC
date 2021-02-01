import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public message: string = '';
  public registerForm!: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.registerForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register(registerForm: FormGroup) {
    if (registerForm.invalid) {
      this.message = 'CHECK ERRORS';
      console.log(this.message);
    } else {
      const username: string = registerForm.value.username;
      const password: string = registerForm.value.password;
      this.userService.register(username, password).subscribe(
        (resp) => {
          alert('Successfully registered, please login!');
          this.message = resp.msg;
          this.router.navigate(['login']);
        },
        (err) => {
          alert(`Error registering ${err.error.msg}`);
          this.message = err.error.msg;
        }
      );
    }
  }
}
