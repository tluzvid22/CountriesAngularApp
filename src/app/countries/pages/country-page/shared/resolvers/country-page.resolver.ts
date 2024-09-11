import { inject } from '@angular/core';
import {ResolveFn} from '@angular/router';
import {Country} from "../../../../interfaces/country";
import {CountriesService} from "../../../../services/countries.service";

export const CountryPageResolver: ResolveFn<Country[]> = (route) => {
  const code = route.params['id'];
  return inject(CountriesService).searchByCode(code!);
};
