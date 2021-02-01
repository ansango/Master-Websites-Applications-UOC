import Wine from '../model/wine';
import Food from '../model/food';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WineService {
  private wines: Wine[];
  constructor() {
    this.wines = [
      {
        id: 1,
        name: 'Protos',
        imgUrl: '../../assets/wines/protos.png',
        price: 10,
        quantityInCart: 1,
        isOnSale: false,
        foodParing: [new Food('patatas', 300, true, false)],
      },
      {
        id: 2,
        name: 'Verdejo',
        imgUrl: '../../assets/wines/protos.png',
        price: 10,
        quantityInCart: 0,
        isOnSale: true,
        foodParing: [new Food('patatas', 300, true, false)],
      },
      {
        id: 3,
        name: 'Rueda',
        imgUrl: '../../assets/wines/protos.png',
        price: 10,
        quantityInCart: 0,
        isOnSale: false,
        foodParing: [new Food('patatas', 300, true, false)],
      },
      {
        id: 4,
        name: 'Rosado',
        imgUrl: '../../assets/wines/protos.png',
        price: 10,
        quantityInCart: 0,
        isOnSale: true,
        foodParing: [new Food('patatas', 300, true, false)],
      },
      {
        id: 5,
        name: 'Tinto',
        imgUrl: '../../assets/wines/protos.png',
        price: 10,
        quantityInCart: 0,
        isOnSale: false,
        foodParing: [new Food('patatas', 300, true, false)],
      },
    ];
  }

  getWines(): Observable<Wine[]> {
    return of(this.wines);
  }

  changeQuatity(
    id: number,
    quantityChange: number
  ): Observable<Wine | undefined> {
    const wineSelected = this.wines.find((wine) => wine.id === id);
    wineSelected!.quantityInCart += quantityChange;
    return of(wineSelected);
  }

  createWine(wine: Wine): Observable<any> {
    let _wine = Object.assign({}, wine); // hacemos copia del objeto
    _wine.id = this.wines.length + 1; // declaramos un nuevo id en el objeto
    this.wines.push(_wine);
    return of(_wine);
  }
}
