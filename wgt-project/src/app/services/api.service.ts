import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipie } from '../shared/recipie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/Recipie';

  constructor(private http: HttpClient) {}

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  get(): Observable<Recipie> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200');
    return this.http.get<Recipie>(`${this.apiUrl}/all`, {
      headers: headers,
    });
  }

  // requires to send only one obj
  post(recipie: Recipie): Observable<Recipie> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200');
    return this.http.post<Recipie>(`${this.apiUrl}/1`, recipie, {
      headers: headers,
    });
  }

  //requires to send all the data
  put(recipie: Recipie): Observable<Recipie> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200');
    return this.http.put<Recipie>(`${this.apiUrl}/all`, recipie, {
      headers: headers,
    });
  }

  //Set method
}
