import { SummaryDataService } from './../../../../services/summary-data.service';
import { Component, OnInit } from '@angular/core';
import { CountryDetailData } from 'src/app/models/countryDetailData';

@Component({
  selector: 'app-last-month-country-data',
  template: `
    <p-chart
      type="line"
      [data]="chartData"
      [responsive]="true"
      [options]="basicOptions"
    >
  </p-chart>
  `,
  styleUrls: ['./last-month-country-data.component.scss'],
})
export class LastMonthCountryDataComponent implements OnInit {
  countryDetailData: CountryDetailData[];
  chartLabel: string[];
  chartConfirmedData: number[];
  chartData;
  basicOptions;

  constructor(private dataService: SummaryDataService) {}

  ngOnInit(): void {
    this.getCountryDetailLastMonth();
    this.applyLightTheme();
  }

  getCountryDetailLastMonth() {
    this.dataService.getCountryDetails().subscribe((response) => {
      this.countryDetailData = response.reverse().slice(0, 30);
      this.getSortedChartData();
    });
  }

  getSortedChartData() {
    this.chartLabel = this.countryDetailData.map((a) =>
      new Date(a.Date).toLocaleDateString().toString()
    );
    this.chartConfirmedData = this.countryDetailData.map((a) => a.Confirmed);

    this.chartData = {
      labels: this.chartLabel,
      datasets: [
        {
          label: 'Türkiye İçin Son 1 Aylık Vaka Artış Grafiği',
          borderColor: '#FFA726',
          tension: 0.2,
          backgroundColor: 'rgba(255,167,38,0.2)',
          data: this.chartConfirmedData,
          fill: true,
        },
      ],
    };
  }

  applyLightTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}
