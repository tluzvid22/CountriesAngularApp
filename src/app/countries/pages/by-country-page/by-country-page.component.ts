import { Component } from '@angular/core';
import {Country} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  countries           : Country[] = [];
  isLoading           : boolean   = false;
  searchBoxPlaceholder: string;

  constructor(private countriesService: CountriesService) {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.searchBoxPlaceholder = this.countriesService.cacheStore.byCountries.term || 'Buscar por país';
  }

  async searchByCountry( term: string ) {
    this.isLoading = true;
    this.countries = await firstValueFrom(this.countriesService.searchCountry(term));
    this.isLoading = false;
  }
}
