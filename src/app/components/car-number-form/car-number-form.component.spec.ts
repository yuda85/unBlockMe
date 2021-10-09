import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarNumberFormComponent } from './car-number-form.component';

describe('CarNumberFormComponent', () => {
  let component: CarNumberFormComponent;
  let fixture: ComponentFixture<CarNumberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarNumberFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
