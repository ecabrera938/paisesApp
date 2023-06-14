import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countriess.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  constructor(private CountriesService: CountriesService) {}

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byCounties.countries
    this.initialValue = this.CountriesService.cacheStore.byCounties.term
  }

  serchByName(term: string): void {
    this.isLoading = true;
    // console.log('Desde ByNAmePage');
    // console.log({ term });
    this.CountriesService.serchName(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
