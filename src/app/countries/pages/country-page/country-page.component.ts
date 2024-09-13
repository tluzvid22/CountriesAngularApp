import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Country} from "../../interfaces/country";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent {
  country: Country;

  constructor(route: ActivatedRoute) {
    this.country = route.snapshot.data['countryPageResolver'][0];
  }

  getTableCode(country: Country): string {
    if (country.cioc) return country.cioc;
    if (country.ccn3) return country.ccn3;
    if (country.cca2) return country.cca2;
    if (country.cca3) return country.cca3;
    return 'NaN';
  }

  get translations() : string[] {
    const uniqueStrings = new Set<string>();
    Object.values(this.country.translations).forEach(val => {
      uniqueStrings.add(val.common);
    });
    return Array.from(uniqueStrings);
  }
}
