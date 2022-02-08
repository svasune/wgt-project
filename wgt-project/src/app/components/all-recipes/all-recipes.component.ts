import { Component, OnInit } from '@angular/core';
import { MockApiService } from 'src/app/services/mock-api.service';
import { RecipesApiService } from 'src/app/services/recipes-api.service';
import { Recipie } from 'src/app/shared/recipie';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
})
export class AllRecipesComponent implements OnInit {
  recipies: Recipie[] = [];

  // Recipie Api Fetch data
  constructor(private readonly apiUrl: RecipesApiService) {}

  ngOnInit(): void {
    this.apiUrl.getRecipies().subscribe((recipies) => {
      this.recipies = recipies;
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
