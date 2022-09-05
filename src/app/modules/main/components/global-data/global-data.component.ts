import { SummaryDataService } from './../../../../services/summary-data.service';
import { Component, OnInit } from '@angular/core';
import { SummaryData } from 'src/app/models/summaryData';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.scss'],
})
export class GlobalDataComponent implements OnInit {
  summaryData: SummaryData;

  constructor(private dataService: SummaryDataService) {}

  ngOnInit(): void {this.getGlobalData();}

  getGlobalData() {
    this.dataService.getSummaryData().subscribe((response) => {
      this.summaryData = response;
    });
  }
}
