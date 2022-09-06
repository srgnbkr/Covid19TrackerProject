import { SummaryDataService } from './../../../../services/summary-data.service';
import { SummaryData } from './../../../../models/summaryData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  summaryData: SummaryData;
  filterText='';

  constructor(private sumamryDataService: SummaryDataService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.sumamryDataService.getSummaryData().subscribe((response) => {
      this.summaryData = response;
    });
  }
}
