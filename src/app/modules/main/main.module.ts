import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {CardModule} from 'primeng/card'
import {DropdownModule} from 'primeng/dropdown';
import {ChartModule} from 'primeng/chart';
import {InputTextModule} from 'primeng/inputtext';

import { MainRoutingModule } from './main-routing.module';
import { GlobalDataComponent } from './components/global-data/global-data.component';
import { CountryDataComponent } from './components/country-data/country-data.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MostConfirmedCountryComponent } from './components/most-confirmed-country/most-confirmed-country.component';
import { LastMonthCountryDataComponent } from './components/last-month-country-data/last-month-country-data.component';


@NgModule({
  declarations: [
    GlobalDataComponent,
    CountryDataComponent,
    HomePageComponent,
    MostConfirmedCountryComponent,
    LastMonthCountryDataComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    CardModule,
    DropdownModule,
    ChartModule,
    InputTextModule
  ]
})
export class MainModule { }
