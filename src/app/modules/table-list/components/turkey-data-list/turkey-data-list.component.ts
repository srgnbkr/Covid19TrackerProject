import { CountryDetailData } from './../../../../models/countryDetailData';
import { SummaryDataService } from 'src/app/services/summary-data.service';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-turkey-data-list',
  templateUrl: './turkey-data-list.component.html',
  styleUrls: ['./turkey-data-list.component.scss'],
})
export class TurkeyDataListComponent implements OnInit {
  turkeyDataList: CountryDetailData[];
  dataLoaded: boolean = false;
  display:boolean = false;

  constructor(private dataService: SummaryDataService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dataService.getCountryDetails().subscribe((response) => {
      this.turkeyDataList = response.reverse();
      this.dataLoaded = true;
    });
  }

  exportPdf() {
    const doc = new jsPDF();

    for (let i = 0; i < this.turkeyDataList.length; i++) {
      autoTable(doc, {
        head: [['Tarih', 'ToplamVaka ', 'ToplamÖlüm']],
        body: [
          [
            new Date(this.turkeyDataList[i].Date).toLocaleDateString(),
            this.turkeyDataList[i].Confirmed,
            this.turkeyDataList[i].Deaths,
          ],
        ],
      });
    }

    doc.save('TürkiyeCovid19Verileri.pdf');
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.turkeyDataList);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'TürkiyeCovid19Verileri');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  showDialog(){
    this.display = true;
  }
}
