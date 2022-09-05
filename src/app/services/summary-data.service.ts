import { environment } from './../../environments/environment.prod';
import { SummaryData } from './../models/summaryData';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryDetailData } from '../models/countryDetailData';

@Injectable({
  providedIn: 'root',
})
export class SummaryDataService {
  constructor(private httpClient: HttpClient) {}

  getSummaryData(): Observable<SummaryData> {
    return this.httpClient
      .get<SummaryData>(`${environment.BASE_URL}/summary`)
      .pipe((response) => response);
  }

  getCountryDetails(): Observable<CountryDetailData[]> {
    return this.httpClient.get<CountryDetailData[]>(
      `${environment.BASE_URL}/dayone/country/turkey`
    );
  }
}
