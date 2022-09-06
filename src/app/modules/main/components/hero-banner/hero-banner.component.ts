import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent implements OnInit {
  description =
    'Yeni Koronavirüs Hastalığı (COVID-19), ilk olarak Çin’in VuhanEyaleti’nde Aralık ayının sonlarında solunum yolu belirtileri (ateş,öksürük, nefes darlığı) gelişen bir grup hastada yapılan araştırmalarsonucunda 13 Ocak 2020’de tanımlanan bir virüstür.';
  constructor() {}

  ngOnInit(): void {}
}
