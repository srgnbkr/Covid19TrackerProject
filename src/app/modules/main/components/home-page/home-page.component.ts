import { LastMonthCountryDataComponent } from './../last-month-country-data/last-month-country-data.component';
import { CardModule } from 'primeng/card';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <app-hero-banner></app-hero-banner>
    <app-global-data></app-global-data>
    <app-country-data></app-country-data>
    <div class="grid p-fluid">
      <div class="col-12 lg:col-6">
        <div class="card">
          <app-most-confirmed-country></app-most-confirmed-country>
        </div>

      </div>
      <div class="col-12 lg:col-6">
        <div class="card">
          <app-last-month-country-data></app-last-month-country-data>
        </div>

      </div>
    </div>
  `,
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
