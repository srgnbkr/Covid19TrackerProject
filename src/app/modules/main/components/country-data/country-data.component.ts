import { Component, OnInit } from '@angular/core';
import { CountryData } from 'src/app/models/countryData';
import { SummaryData } from 'src/app/models/summaryData';
import { SummaryDataService } from 'src/app/services/summary-data.service';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.scss']
})
export class CountryDataComponent implements OnInit {

  summaryData: SummaryData;
  selectedCountry: CountryData;

  constructor(private dataService:SummaryDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.dataService.getSummaryData().subscribe((response) =>{
      this.summaryData = response;
    })
  }

}
