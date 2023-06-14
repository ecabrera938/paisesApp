import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countriess.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent implements OnInit {
  constructor(private CountriesService: CountriesService) {}

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byCapital.countries;
    this.initialValue = this.CountriesService.cacheStore.byCapital.term;
  }

  serchByCapital(term: string): void {
    this.isLoading = true;
    // console.log('Desde ByCapitalPage');
    console.log({ term });
    this.CountriesService.serchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
