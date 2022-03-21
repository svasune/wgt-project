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

  // GET METHOD
  getAll(path: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.hostAddress}/${path}`); //Recipies/all
  }

  getFilter(path: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.hostAddress}/${path}`); //Recipies/all
  }

  // GET METHOD BY ID
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

  // GET METHOD BY ID -- FOR SEARCH BAR
  search(term: string): Observable<T[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<T[]>(`${this.hostAddress}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found recipies matching "${term}"`)
          : this.log(`no recipies matching "${term}"`)
      ),
      catchError(this.handleError<T[]>('searchRecipies', []))
    );
  }

  post(path: any, data: object): Observable<T[]> {
    return this.http
      .post<T[]>(`${this.hostAddress}/${path}`, data)
      .pipe(map((d) => d));
  }

  put(path: string, t: T): Observable<T> {
    return this.http.put<T>(`${this.hostAddress}/${path}`, t);
  }

  delete(path: string) {
    return this.http.delete<T>(`${this.hostAddress}/${path}`);
  }
}
//https://www.positronx.io/angular-7-httpclient-http-service/
