import { Injectable } from '@angular/core';
import { Recipie } from '../shared/recipie';
import { RECIPIES } from '../shared/mock-recipes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  getRecipes(): Observable<Recipie[]> {
    return of(RECIPIES);
  }

  constructor() {}
}
