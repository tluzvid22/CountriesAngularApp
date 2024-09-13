import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ByCapitalPageComponent} from "./pages/by-capital-page/by-capital-page.component";
import {ByCountryPageComponent} from "./pages/by-country-page/by-country-page.component";
import {ByRegionPageComponent} from "./pages/by-region-page/by-region-page.component";
import {CountryPageComponent} from "./pages/country-page/country-page.component";
import {CountryPageResolver} from "./pages/country-page/shared/resolvers/country-page.resolver";
import {NotFound404Component} from "../shared/components/not-found404/not-found404.component";
import {CountryPageGuard} from "./pages/country-page/shared/auth/country-page.guard";

const routes: Routes = [
  {path: 'by-capital', component:  ByCapitalPageComponent},
  {path: 'by-country', component: ByCountryPageComponent},
  {path: 'by-region', component: ByRegionPageComponent},
  {
    path: 'by/:id', component: CountryPageComponent,
    resolve: {countryPageResolver: CountryPageResolver},
    canMatch: [CountryPageGuard]

  },
  {path: '**', redirectTo: 'by-capital'},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class CountriesRoutingModule { }
