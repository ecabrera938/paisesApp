import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countriess.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-coutry-page',
  templateUrl: './coutry-page.component.html',
  styles: [
    `
      img {
        width: 250px;
      }
    `,
  ],
})
export class CoutryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private CountriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {

    //   this.CountriesService.searchCoutryByAlphaCode(id).subscribe(country => {
    //     console.log({country});

    //   })

    // });

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.CountriesService.searchCoutryByAlphaCode(id))
      )
      .subscribe((coutry) => {
        if (!coutry) return this.router.navigateByUrl('');

        return (this.country = coutry);
        // return
      });
  }
}
