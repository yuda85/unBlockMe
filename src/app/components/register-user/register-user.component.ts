import { Component, OnInit } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  constructor(private userService: UserService) {}
  carNumberControl = new FormControl('', [
    Validators.required,
    Validators.min(7),
  ]);
  phoneNumberControl = new FormControl('', [
    Validators.required,
    Validators.min(7),
  ]);

  ngOnInit(): void {}

  public onSubmit() {
    this.userService.registerUser(
      this.carNumberControl.value,
      this.phoneNumberControl.value
    );
  }
}
