import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };
  hostAddress = `${environment.hostAddress}`;

  constructor(private http: HttpClient) {}

  getAll(path: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.hostAddress}/${path}`);
  }

  getOne(id: string): Observable<T> {
    return this.http.get<T>(`${this.hostAddress}/${id}`);
  }
  put(path: string, t: T): Observable<T> {
    return this.http.put<T>(`${this.hostAddress}/${path}`, t);
  }
  post(id: string, data: object): Observable<T> {
    return this.http.post<T>(`${this.hostAddress}/${id}`, data);
  }
  delete(path: string) {
    return this.http.delete<T>(`${this.hostAddress}/${path}`);
  }
}
//https://www.positronx.io/angular-7-httpclient-http-service/
