import { TurkeyDataListComponent } from './components/turkey-data-list/turkey-data-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';

const routes: Routes = [
  {path:'country-data-list',component:CountryListComponent},
  {path:'turkey-data-list',component:TurkeyDataListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableListRoutingModule {}
