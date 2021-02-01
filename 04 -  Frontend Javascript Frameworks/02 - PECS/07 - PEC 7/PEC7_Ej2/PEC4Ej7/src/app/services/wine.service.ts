import Wine from '../model/wine';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  constructor(private http: HttpClient) {}

  getWines(query: string): Observable<Wine[]> {
    return this.http.get<Wine[]>(
      'http://localhost:3000' + `/api/wine?q=${query}`
    );
  }

  getWine(code: string): Observable<Wine> {
    return this.http.get<Wine>('http://localhost:3000' + `/api/wine/${code}`);
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
