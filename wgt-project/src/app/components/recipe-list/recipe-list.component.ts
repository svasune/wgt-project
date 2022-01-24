import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe';
import { RecipesService } from 'src/app/recipes/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  private loadRecipes(): void {
    this.recipesService
      .getRecipes()
      .subscribe((recipes: Recipe[]) => (this.recipes = recipes));
  }
}

//pagal ID paimti vieno elemento informacija.
