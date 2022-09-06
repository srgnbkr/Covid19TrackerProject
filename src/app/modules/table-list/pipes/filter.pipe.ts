import { CountryData } from './../../../models/countryData';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: CountryData[], filterText: string): CountryData[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (c: CountryData) =>
            c.Country.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }

}
