import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Recipe } from 'src/app/shared/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
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
