import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMonthCountryDataComponent } from './last-month-country-data.component';

describe('LastMonthCountryDataComponent', () => {
  let component: LastMonthCountryDataComponent;
  let fixture: ComponentFixture<LastMonthCountryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastMonthCountryDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMonthCountryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
