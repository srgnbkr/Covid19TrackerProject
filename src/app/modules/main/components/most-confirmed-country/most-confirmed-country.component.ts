import { SummaryDataService } from './../../../../services/summary-data.service';
import { Component, OnInit } from '@angular/core';
import { CountryData } from 'src/app/models/countryData';
import { SummaryData } from 'src/app/models/summaryData';

@Component({
  selector: 'app-most-confirmed-country',
  template: `<p-chart type="bar" [data]="chartData"></p-chart>`,
  styleUrls: ['./most-confirmed-country.component.scss'],
})
export class MostConfirmedCountryComponent implements OnInit {
  summaryData: SummaryData;
  mostConfirmedData: CountryData[];
  chartLabel: string[];
  chartConfirmedData: number[];
  chartData;

  constructor(private dataService: SummaryDataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getSummaryData().subscribe((response) => {
      this.summaryData = response;
      this.getSortedData();

      this.chartLabel = this.mostConfirmedData
        .map((a) => a.Country)
        .filter((value, index, self) => self.indexOf(value) === index);

      this.chartConfirmedData = this.mostConfirmedData
        .map((a) => a.TotalConfirmed)
        .filter((value, index, self) => self.indexOf(value) === index);

      this.chartData = {
        labels: this.chartLabel,
        datasets: [
          {
            label: 'En Çok Vaka Görülen 10 Ülke',
            backgroundColor: [
              '#EC407A',
              '#AB47BC',
              '#42A5F5',
              '#7E57C2',
              '#66BB6A',
              '#FFCA28',
              '#26A69A'
            ],
            data: this.chartConfirmedData,
          },
        ],
      };
    });
  }

  //En Çok Vaka Görülen 10 Ülkeyi Sıralıyoruz.
  getSortedData() {
    let data = JSON.parse(JSON.stringify(this.summaryData.Countries));
    this.mostConfirmedData = data
      .sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
      .slice(0, 10);
  }
}
