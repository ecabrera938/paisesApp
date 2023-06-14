import { Component } from '@angular/core';
import { CountriesService } from '../../services/countriess.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  constructor(private CountriesService: CountriesService) {}

  public countries: Country[] = [];
  public isLoading: boolean = false;

  serchByName(term: string): void {
    this.isLoading = true
    // console.log('Desde ByNAmePage');
    // console.log({ term });
    this.CountriesService.serchName(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false
    });
  }

}
