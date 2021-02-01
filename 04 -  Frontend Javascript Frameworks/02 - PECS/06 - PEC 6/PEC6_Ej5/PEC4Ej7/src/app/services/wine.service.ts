import Wine from '../model/wine';
import Food from '../model/food';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  private wines!: Wine[];
  constructor(private http: HttpClient) {}

  getWines(query: string): Observable<Wine[]> {
    return this.http.get<Wine[]>(
      'http://localhost:3000' + `/api/wine?q=${query}`
    );
  }
  changeQuantity(id: number, changeInQuantity: number): Observable<any> {
    return this.http.patch('http://localhost:3000' + '/api/wine/' + id, {
      changeInQuantity: changeInQuantity,
    });
  }

  createWine(wine: Wine): Observable<any> {
    return this.http.post<Wine>('http://localhost:3000' + '/api/wine', wine);
  }
}
