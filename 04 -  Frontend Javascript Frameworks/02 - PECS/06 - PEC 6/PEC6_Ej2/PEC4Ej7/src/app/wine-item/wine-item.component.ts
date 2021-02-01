import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

import Wine from '../model/wine';
import WineQuantityChange from '../model/wine-quantity-change';
@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineItemComponent implements OnInit {
  @Input() public wine!: Wine;
  @Output()
  private wineQuantityChange: EventEmitter<WineQuantityChange> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.wine.quantityInCart = 0;
  }

  increment(): void {
    this.wineQuantityChange.emit({
      wine: this.wine,
      quantityChange: 1,
    });
  }
  decrement(): void {
    if (this.wine.quantityInCart === 0) {
      return;
    }
    if (this.wine.quantityInCart > 0) {
      this.wineQuantityChange.emit({
        wine: this.wine,
        quantityChange: -1,
      });
    }
  }
}
