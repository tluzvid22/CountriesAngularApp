import {Component} from '@angular/core';
import {Country} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";
import {Region} from "../../interfaces/region.type";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  countries:       Country[] = [];
  isLoading:       boolean   = false;
  regions:         Region[]  = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  async searchByRegion( region: Region ) {
    this.selectedRegion = region;
    this.isLoading = true;
    this.countries = await firstValueFrom(this.countriesService.searchRegion(region));
    this.isLoading = false;
  }
}
