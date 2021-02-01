import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Food from 'src/app/model/food';
import Wine from '../../model/wine';
import { WineService } from '../../services/wine.service';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css'],
})
export class WineDetailComponent implements OnInit {
  public wine!: Wine;
  public foodParing!: Food[];
  constructor(
    private wineService: WineService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('code');
    const wineCode = id !== null ? id : '';
    this.wineService.getWine(wineCode).subscribe((wine) => (this.wine = wine));
  }
}
