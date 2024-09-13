import {Component, Input} from '@angular/core';
import {Country} from "../../interfaces/country";

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {
  @Input({required:true}) countries: Country[] = [];

  getTableCode(country: Country): string {
    if (country.cioc) return country.cioc;
    if (country.ccn3) return country.ccn3;
    if (country.cca2) return country.cca2;
    if (country.cca3) return country.cca3;
    return 'NaN';
  }
}
