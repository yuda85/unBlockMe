import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor() {}

  private showProgress$: Subject<boolean> = new Subject();

  public toggleProgress(isLoading: boolean): void {
    this.showProgress$.next(isLoading);
  }

  public isLoading(): Observable<boolean> {
    return this.showProgress$.asObservable();
  }
}
