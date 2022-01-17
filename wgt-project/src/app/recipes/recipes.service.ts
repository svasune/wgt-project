import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RECIPES } from '../shared/mock-recipes';
import { Recipe } from '../shared/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }

  constructor() {}
}
