import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countriess.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.types';


@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  constructor(private CountriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.region
  }

  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;
  

  serchByRegion(region: Region): void {
    this.selectedRegion = region;

    // console.log('Desde ByRegionPage');
    // console.log({ region });
    this.CountriesService.serchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
