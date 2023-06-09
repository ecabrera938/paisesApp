import { Component } from '@angular/core';
import { CountriesService } from '../../services/countriess.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  constructor(private CountriesService: CountriesService) {}

  public countries: Country[] = [];

  serchByRegion(region: string): void {
    console.log('Desde ByRegionPage');
    console.log({ region });
    this.CountriesService.serchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
