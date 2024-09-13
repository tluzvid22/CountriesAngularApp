import { Routes } from '@angular/router';
import { AboutPageComponent } from "./shared/components/about-page/about-page.component";
import { ContactPageComponent } from "./shared/components/contact-page/contact-page.component";
import { HomePageComponent } from "./shared/components/home-page/home-page.component";
import {NotFound404Component} from "./shared/components/not-found404/not-found404.component";

export const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule),
  },
  {path: 'not-found', component: NotFound404Component},
  {path: '**', redirectTo: 'not-found'},
];
