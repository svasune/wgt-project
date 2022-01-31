import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipie } from '../shared/recipie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/Recipie/';

  constructor(private http: HttpClient) {}

  get(): Observable<Recipie[]> {
    return this.http.get<Recipie[]>(`${this.apiUrl}/all`);
  }

  post(recipie: Recipie): Observable<Recipie> {
    return this.http.post<Recipie>(`${this.apiUrl}/1`, recipie);
  }

  // put(url: string, data: object) {
  //   return this.http.put(this.apiUrl + url, data, this.getRequestOptions());
  // }

  // delete(url: string) {
  //   return this.http.delete(`${this.apiUrl}${url}`, this.getRequestOptions());
  // }

  // private getRequestOptions() {
  //   const token = sessionStorage.getItem('access_token');
  //   const headers: { [key: string]: string } = {
  //     'Content-Type': 'application/json',
  //     Authorization: token ? `Bearer ${token}` : '',
  //   };
  //   return { headers };
  // }
}
