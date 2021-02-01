import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Food from '../model/food';
import Wine from '../model/wine';
import {
  QuantityChange,
  WineQuantityChange,
} from '../wine-item/wine-item.component';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  public wines!: Wine[];
  constructor() {}

  ngOnInit(): void {
    this.wines = [
      new Wine(1, 'Protos', '../../assets/wines/protos.png', 10, 0, true, [
        new Food('solomillo', 500, false, false),
        new Food('patatas', 300, true, false),
      ]),
      new Wine(2, 'Verdejo', '../../assets/wines/protos.png', 10, 0, true, [
        new Food('solomillo', 500, false, false),
        new Food('patatas', 300, true, false),
      ]),
      new Wine(3, 'Rueda', '../../assets/wines/protos.png', 10, 0, true, [
        new Food('solomillo', 500, false, false),
        new Food('patatas', 300, true, false),
      ]),
      new Wine(4, 'Rosado', '../../assets/wines/protos.png', 10, 0, true, [
        new Food('solomillo', 500, false, false),
        new Food('patatas', 300, true, false),
      ]),
      new Wine(5, 'Tinto', '../../assets/wines/protos.png', 10, 0, true, [
        new Food('solomillo', 500, false, false),
        new Food('patatas', 300, true, false),
      ]),
    ];
  }

  wineQuantityChange(event: WineQuantityChange) {
    const wineSelected = this.wines.find((wine) => wine.id === event.id);
    if (event.quantityChange === QuantityChange.INCREMENT) {
      if (wineSelected) {
        wineSelected.quantityInCart++;
      }
    } else if (event.quantityChange === QuantityChange.DECREMENT) {
      if (wineSelected) {
        wineSelected.quantityInCart--;
      }
    }
  }
}
