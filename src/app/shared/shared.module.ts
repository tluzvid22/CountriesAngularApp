import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
    exports: [
        AboutPageComponent,
        HomePageComponent,
        SearchBoxComponent,
        SidebarComponent,
        LoadingSpinnerComponent,
    ]
})
export class SharedModule { }
