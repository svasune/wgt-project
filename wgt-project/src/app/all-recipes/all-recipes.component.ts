import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
})
export class AllRecipesComponent implements OnInit {
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
