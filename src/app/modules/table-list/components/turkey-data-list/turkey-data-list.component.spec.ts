import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeyDataListComponent } from './turkey-data-list.component';

describe('TurkeyDataListComponent', () => {
  let component: TurkeyDataListComponent;
  let fixture: ComponentFixture<TurkeyDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurkeyDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurkeyDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
