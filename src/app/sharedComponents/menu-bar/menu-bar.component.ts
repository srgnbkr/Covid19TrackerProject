import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  template: `
   <div class="header">
    <p-menubar [model]="items"></p-menubar>
  </div>
  `,
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Anasaayfa',
        icon: 'pi pi-home',

        routerLink: ['/'],
      },
      {
        label: 'Ülkeler',
        icon: 'pi pi-flag-fill',
        routerLink:['tables/country-data-list']
      },
      {
        label: 'Türkiye İçin Covid19',
        icon: 'pi pi-globe',
        routerLink:['tables/turkey-data-list']
      },
    ];
  }
}
