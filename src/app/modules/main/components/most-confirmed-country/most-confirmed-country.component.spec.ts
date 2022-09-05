import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostConfirmedCountryComponent } from './most-confirmed-country.component';

describe('MostConfirmedCountryComponent', () => {
  let component: MostConfirmedCountryComponent;
  let fixture: ComponentFixture<MostConfirmedCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostConfirmedCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostConfirmedCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
