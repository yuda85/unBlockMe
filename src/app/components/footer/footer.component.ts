import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private uiService: UiService) {
    this.isLoading = uiService.isLoading();
  }

  public isLoading: Observable<boolean>;

  ngOnInit(): void {}
}
