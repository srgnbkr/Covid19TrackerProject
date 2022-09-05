import { GlobalData } from './../../../../models/globalData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <app-global-data></app-global-data>
    <app-country-data></app-country-data>
    <div class="grid">
      <div class="col-6">
        <app-most-confirmed-country></app-most-confirmed-country>
      </div>
      <div class="col-6">
        <app-last-month-country-data></app-last-month-country-data>
      </div>
    </div>
  `,
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
