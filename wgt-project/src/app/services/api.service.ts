import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
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
    return this.http.get<T[]>(`${this.hostAddress}/${path}`); //Recipies/all
  }

  getOne(path: string, id: number, res: string) {
    return this.http.get(`${this.hostAddress}/${path}/${id}`).pipe(
      map((res) => {
        return res;
      })
    ); // Recipies/id
  }

  put(path: string, t: T): Observable<T> {
    return this.http.put<T>(`${this.hostAddress}/${path}`, t);
  }
  post(path: any, data: object): Observable<T> {
    return this.http.post<T>(`${this.hostAddress}/${path}`, data);
  }
  delete(path: string) {
    return this.http.delete<T>(`${this.hostAddress}/${path}`);
  }
}
//https://www.positronx.io/angular-7-httpclient-http-service/
