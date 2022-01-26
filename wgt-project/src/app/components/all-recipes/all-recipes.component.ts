import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
})
export class AllRecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData = () => {
    this.api.get('/api/Recipie/all').subscribe(({ recipes }: any): void => {
      this.recipes = recipes;
    });
  };
}
