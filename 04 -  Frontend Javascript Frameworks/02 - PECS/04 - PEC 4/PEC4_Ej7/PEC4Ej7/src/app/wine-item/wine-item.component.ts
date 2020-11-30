import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import Food from '../model/food';
import Wine from '../model/wine';

export enum QuantityChange {
  INCREMENT,
  DECREMENT,
}
export interface WineQuantityChange {
  id: number;
  quantityChange: QuantityChange;
}
@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineItemComponent implements OnInit {
  @Input() public wine!: Wine;
  @Output()
  private wineQuantityChangeEvent: EventEmitter<WineQuantityChange> = new EventEmitter<WineQuantityChange>();
  public counter: number = 0;
  public units!: number[];

  constructor() {}

  ngOnInit(): void {
    this.wine.quantityInCart = 0;
  }

  increment(): void {
    this.wineQuantityChangeEvent.emit({
      id: this.wine.id,
      quantityChange: QuantityChange.INCREMENT,
    });
  }
  decrement(): void {
    if (this.wine.quantityInCart === 0) {
      return;
    }
    this.wineQuantityChangeEvent.emit({
      id: this.wine.id,
      quantityChange: QuantityChange.DECREMENT,
    });
  }
}
