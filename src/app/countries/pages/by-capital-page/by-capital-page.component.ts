import { Component } from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../interfaces/country";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  countries           : Country[] = [];
  isLoading           : boolean   = false;
  searchBoxPlaceholder: string;

  constructor(private countriesService: CountriesService) {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.searchBoxPlaceholder = this.countriesService.cacheStore.byCapital.term || 'Buscar por país';
  }

  async searchByCapital( term: string ) {
    this.isLoading = true;
    this.countries = await firstValueFrom(this.countriesService.searchCapital(term));
    this.isLoading = false;
  }
}
