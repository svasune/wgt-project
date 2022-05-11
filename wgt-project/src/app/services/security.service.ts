import { Injectable } from '@angular/core';

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor() {}

  login(token: string) {
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  logOut() {
    sessionStorage.removeItem(TOKEN_KEY);
  }

  isLoggedIn() {
    return !!sessionStorage.getItem(TOKEN_KEY);
  }
}
