import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private readonly urlPrefix = 'http://localhost:5000/api/recipes';
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(this.urlPrefix + url, this.getRequestOptions());
  }
  post(url: string, data: object) {
    return this.http.post(this.urlPrefix + url, data, this.getRequestOptions());
  }
  put(url: string, data: object) {
    return this.http.put(this.urlPrefix + url, data, this.getRequestOptions());
  }
  patch(url: string, data: object) {
    return this.http.patch(
      this.urlPrefix + url,
      data,
      this.getRequestOptions()
    );
  }
  delete(url: string) {
    return this.http.delete(
      `${this.urlPrefix}${url}`,
      this.getRequestOptions()
    );
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
