import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from 'src/app/models/beers.interface';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit {
  beer!: Beer;
  bitterWidth: string = '';
  hoppyWidth: string = '';
  maltyWidth: string = '';
  colourWidth: string = '';

  constructor(
    private service: BeersService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(identifier);
    this.service.getBeerById(identifier).subscribe((beer) => {
      beer.name = beer.name.split('-').join(' ');
      beer.subtitle = beer.subtitle.split('-').join(' ').split('_').join(' ');

      this.bitterWidth = `${beer.tastingNotes.bitterness! * 100}%`;
      this.hoppyWidth = `${beer.tastingNotes.hoppyness! * 100}%`;
      this.maltyWidth = `${beer.tastingNotes.maltyness! * 100}%`;
      this.colourWidth = `${beer.brewSheet.colour! * 100}%`;
      this.beer = beer;
    });
  }
}
