import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Wine from '../model/wine';
import WineQuantityChange from '../model/wine-quantity-change';
import { Observable, Subject } from 'rxjs';
import { WineService } from '../services/wine.service';

import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  startWith,
  merge,
} from 'rxjs/operators';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  public wines$!: Observable<Wine[]>;
  public searchTerm: string = '';

  private searchSubject: Subject<string> = new Subject();
  private reloadWineList: Subject<void> = new Subject();
  constructor(private wineService: WineService) {}

  ngOnInit(): void {
    this.wines$ = this.searchSubject.pipe(
      startWith(this.searchTerm),
      debounceTime(300),
      distinctUntilChanged(),
      merge(this.reloadWineList),
      switchMap((query) => this.wineService.getWines(this.searchTerm))
    );
  }

  onQuantityChange(event: WineQuantityChange) {
    this.wineService
      .changeQuantity(event.wine.id, event.changeInQuantity)
      .subscribe((res) => this.reloadWineList.next());
  }
  search() {
    this.searchSubject.next(this.searchTerm);
  }

  onCreate() {
    this.reloadWineList.next();
  }
}
