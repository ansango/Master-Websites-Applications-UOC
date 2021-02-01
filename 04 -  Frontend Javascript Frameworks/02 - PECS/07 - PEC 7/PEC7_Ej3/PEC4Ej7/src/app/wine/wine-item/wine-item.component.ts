import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

import Wine from '../../model/wine';
import WineQuantityChange from '../../model/wine-quantity-change';

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineItemComponent implements OnInit {
  @Input() public wine!: Wine;
  @Output()
  private quantityChange: EventEmitter<WineQuantityChange> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  increment(): void {
    this.quantityChange.emit({
      wine: this.wine,
      changeInQuantity: 1,
    });
  }
  decrement(): void {
    if (this.wine.quantityInCart === 0) {
      return;
    }

    if (this.wine.quantityInCart > 0) {
      this.quantityChange.emit({
        wine: this.wine,
        changeInQuantity: -1,
      });
    }
  }
}
