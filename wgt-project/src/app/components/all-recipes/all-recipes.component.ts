import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { MockApiService } from 'src/app/services/mock-api.service';
import { RecipesApi } from 'src/app/services/RecipesApi';
import { Recipie } from 'src/app/shared/recipie';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
  providers: [{ provide: ApiService, useClass: RecipesApi }],
})
export class AllRecipesComponent implements OnInit {
  recipies: Recipie[] = [];

  // Recipie Api data from Server
  constructor(private recipesApi: RecipesApi) {}

  ngOnInit(): void {
    this.recipesApi.getAllRecipies().subscribe;
  }
}

// FETCHING DATA FROM  << MOCK API >>
// constructor(private mockApi: MockApiService) {}

// ngOnInit(): void {
//   this.loadRecipes();
// }

// private loadRecipes(): void {
//   this.mockApi
//     .getRecipes()
//     .subscribe((recipes: Recipie[]) => (this.recipies = recipes));
// }
