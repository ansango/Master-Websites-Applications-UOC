import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Food from '../model/food';
import Wine from '../model/wine';
import WineQuantityChange from '../model/wine-quantity-change';
import { Observable } from 'rxjs';
import { WineService } from '../services/wine.service';
@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  public wines$!: Observable<Wine[]>;
  constructor(private wineService: WineService) {}

  ngOnInit(): void {
    this.wines$ = this.wineService.getWines();
  }

  wineQuantityChange(event: WineQuantityChange) {
    this.wineService.changeQuatity(event.wine.id, event.quantityChange);
  }
}
