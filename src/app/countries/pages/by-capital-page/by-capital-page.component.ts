import { Component } from '@angular/core';
import { CountriesService } from '../../services/countriess.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  constructor(private CountriesService: CountriesService) {}

  public countries: Country[] = [];
  public isLoading: boolean = false;

  serchByCapital(term: string): void {
    this.isLoading = true
    // console.log('Desde ByCapitalPage');
    console.log({ term });
    this.CountriesService.serchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
