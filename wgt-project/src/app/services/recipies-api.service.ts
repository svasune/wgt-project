import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipie } from '../shared/recipie';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RecipiesApiService {
  getRecipes():
    | Observable<import('../types/types').Recipe[]>
    | Promise<import('../types/types').Recipe[]> {
    throw new Error('Method not implemented.');
  }
  constructor(private apiService: ApiService<Recipie>) {}

  getAllRecipies(): Observable<Recipie[]> {
    return this.apiService.getAll(`Recipie/all`);
  }

  getRecipiesFilter(): Observable<Recipie[]> {
    return this.apiService.getFilter(`Recipie/all`);
  }
  // getRecipie(recipieId: number, res: string): Observable<Recipie> {
  //   return this.apiService.getOne(`Recipie`, recipieId, res);
  // }

  getRecipie(recipieId: number): Observable<Recipie> {
    return this.apiService.getOne(`Recipie`, recipieId);
  }

  searchRecipies(term: string): Observable<Recipie[]> {
    return this.apiService.search(`Recipie/?name=${term}`);
  }

  addToList(): Observable<Recipie[]> {
    return this.apiService.post(`Recipie/` + `recipieId`, {});
  }
}
