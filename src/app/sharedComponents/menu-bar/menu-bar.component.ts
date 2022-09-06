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
        label: 'Anasayfa',
        icon: 'pi pi-home',

        routerLink: ['/'],
      },
      {
        label: 'Ülkeler',
        icon: 'pi pi-flag-fill',
        routerLink:['tables/country-list-data']
      },
      {
        label: 'Türkiye İçin Covid19',
        icon: 'pi pi-globe',
      },
    ];
  }
}
