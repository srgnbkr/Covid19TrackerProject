import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

import { TableListRoutingModule } from './table-list-routing.module';
import { CountryListComponent } from './components/country-list/country-list.component';
import { TurkeyDataListComponent } from './components/turkey-data-list/turkey-data-list.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [CountryListComponent, TurkeyDataListComponent, FilterPipe],
  imports: [
    CommonModule,
    TableListRoutingModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    InputTextModule,
    ProgressSpinnerModule,
    ButtonModule,
    DialogModule
  ],
})
export class TableListModule {}
