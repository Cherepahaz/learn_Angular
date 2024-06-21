import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiCardService {

  private apiURL = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  getCards(limit: number = 15): Observable<any> {
    return this.http.get(`${this.apiURL}?limit=${limit}`)
  }
}
