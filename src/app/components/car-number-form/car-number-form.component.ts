import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-car-number-form',
  templateUrl: './car-number-form.component.html',
  styleUrls: ['./car-number-form.component.scss'],
})
export class CarNumberFormComponent implements OnInit {
  carNumberControl = new FormControl('', [
    Validators.required,
    Validators.min(7),
  ]);
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log(this.carNumberControl);
  }

  onSubmit(): void {
    this.userService.sendMessage(this.carNumberControl.value);
  }
}
