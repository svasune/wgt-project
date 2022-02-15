import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipie } from '../shared/recipie';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesApi {
  readonly hostAddress = environment;
  constructor(private apiService: ApiService<Recipie>) {}

  getAllRecipies<Recipie>(): Observable<Recipie[]> {
    return this.apiService.getAll<Recipie>(`${this.hostAddress}/Recipie/all`);
  }
}
