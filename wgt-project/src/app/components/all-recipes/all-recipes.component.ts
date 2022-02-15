import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { MockApiService } from 'src/app/services/mock-api.service';
import { RecipiesApi } from 'src/app/services/recipies-api';
import { Recipie } from 'src/app/shared/recipie';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
  providers: [{ provide: ApiService, useClass: RecipiesApi }],
})
export class AllRecipesComponent implements OnInit {
  recipies: Recipie[] = [];

  // Recipie Api data from Server
  constructor(private recipiesApi: RecipiesApi) {}

  ngOnInit(): void {
    this.recipiesApi.getAllRecipies().subscribe((recipies) => {
      console.log(recipies);
    });
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
