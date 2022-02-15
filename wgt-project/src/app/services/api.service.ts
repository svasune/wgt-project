import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '${appUrl}',
    }),
  };

  constructor(private _http: HttpClient) {
    this.apiUrl = `${environment.hostAddress}`;
  }

  getAll<T>(path: string): Observable<T[]> {
    this.httpOptions;
    return this._http.get<T[]>(`${this.apiUrl}/${path}`);
  }
}
