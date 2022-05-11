import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Identity } from '../components/login/identities';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly urlPrefix = 'http://localhost:5000';
  constructor(private http: HttpClient) {}
  // login, register
  refreshToken(token: string) {
    return this.http.post(
      AUTH_API + 'refreshtoken',
      {
        refreshToken: token,
      },
      httpOptions
    );
  }

  get(url: string) {
    return this.http.get(this.urlPrefix + url, this.getRequestOptions());
  }

  post(url: string, data: object) {
    return this.http.post(this.urlPrefix + url, data, this.getRequestOptions());
  }

  put(url: string, data: object) {
    return this.http.put(this.urlPrefix + url, data, this.getRequestOptions());
  }

  delete(url: string) {
    return this.http.delete(
      `${this.urlPrefix}${url}`,
      this.getRequestOptions()
    );
  }

  private getRequestOptions() {
    const token = sessionStorage.getItem('access_token');
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    };
    return { headers };
  }
}
