import { Component } from '@angular/core';
import { CountriesService } from '../../services/countriess.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  constructor(private CountriesService: CountriesService) {}

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
