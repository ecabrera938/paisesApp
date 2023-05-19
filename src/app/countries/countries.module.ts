import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

import { CoutryPageComponent } from './pages/coutry-page/coutry-page.component';
import { ByCountryPageComponent } from './pages/by-country/by-country.component';
import { ByRegionPageComponent } from './pages/by-region/by-region.component';
import { CountriesRoutingModule } from './coutries-routing.module';
import { SearchBoxComponent } from '../shared/components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CoutryPageComponent,
    CountriesTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
  ]
})
export class CountriesModule { }
