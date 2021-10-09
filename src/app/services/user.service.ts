import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UiService } from './ui.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.baseUrl;

  constructor(private uiService: UiService, private http: HttpClient) {}

  public registerUser(carNumber: number, phoneNumber: number): void {
    console.log(carNumber, phoneNumber);
    this.uiService.toggleProgress(true);
    this.http
      .post(`${this.baseUrl}/users`, {
        carNumber,
        phoneNumber,
      })
      .subscribe((data) => {
        console.log(data);
        this.uiService.toggleProgress(false);
      });
    setTimeout(() => {
      this.uiService.toggleProgress(false);
    }, 2000);
  }

  public sendMessage(carNumber: number): void {
    console.log(carNumber);
    this.uiService.toggleProgress(true);
    this.http
      .post(`${this.baseUrl}/users`, {
        carNumber,
      })
      .subscribe((data) => {
        console.log(data);
        this.uiService.toggleProgress(false);
      });
    setTimeout(() => {
      this.uiService.toggleProgress(false);
    }, 2000);
  }
}
