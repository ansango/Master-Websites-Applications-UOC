import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beers.interface';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  base: string = 'https://neopunkapi.herokuapp.com/api';
  beersParam: string = 'beers';
  idParam: string = 'beer/id';
  constructor(private http: HttpClient) {}
  getAllBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.base}/${this.beersParam}`);
  }
  getBeerById(id: string): Observable<Beer> {
    return this.http.get<Beer>(`${this.base}/${this.idParam}/${id}`);
  }
}
