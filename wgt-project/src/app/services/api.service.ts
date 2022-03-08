import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';

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

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getAll(path: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.hostAddress}/${path}`); //Recipies/all
  }

  getOne(path: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.hostAddress}/${path}/${id}`).pipe(
      tap((_) => this.log(`fetched data id=${id}`)),
      catchError(this.handleError<T>(`get data id=${id}`))
    ); // Recipies/id
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`AppService: ${message}`);
  }

  // getOne(path: string, id: number, res: string) {
  //   return this.http.get(`${this.hostAddress}/${path}/${id}`).pipe(
  //     map((res) => {
  //       return res;
  //     })
  //   ); // Recipies/id
  // }

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
