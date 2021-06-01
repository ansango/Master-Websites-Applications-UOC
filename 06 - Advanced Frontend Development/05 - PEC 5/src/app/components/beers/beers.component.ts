import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beers.interface';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
})
export class BeersComponent implements OnInit {
  beers: Beer[] = [];
  constructor(private service: BeersService) {}

  ngOnInit(): void {
    this.service.getAllBeers().subscribe((beers) => {
      beers.forEach((beer) => {
        beer.name = beer.name.split('-').join(' ');
        beer.subtitle = beer.subtitle.split('-').join(' ').split('_').join(' ');
      });
      this.beers = beers;
    });
  }
}
