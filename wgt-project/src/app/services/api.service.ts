import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly urlPrefix = 'http://localhost:5000/Api/Recipie';

  // export class ApiService {
  //   getRecipes(): Observable<Recipe[]> {
  //     return of(RECIPES);
  //   }

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(this.urlPrefix + url, this.getRequestOptions());
  }

  private getRequestOptions() {
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };

    return {
      headers,
    };
  }
}
