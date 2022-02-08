import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipie } from '../shared/recipie';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  readonly apiUrl = 'http://localhost:5000/Recipie';

  constructor(private readonly http: HttpClient) {}

  // load ALL elements of an array
  getRecipies(): Observable<Recipie[]> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200');
    return this.http.get<Recipie[]>(`${this.apiUrl}/all`, {
      headers: headers,
    });
  }
}
