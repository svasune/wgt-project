import { Component, OnInit } from '@angular/core';
import { RecipiesApiService } from 'src/app/services/recipies-api.service';
import { Recipie } from 'src/app/shared/recipie';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
})
export class AllRecipesComponent implements OnInit {
  recipies: Recipie[] = [];

  constructor(private recipiesApiService: RecipiesApiService) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  private loadRecipes(): void {
    this.recipiesApiService
      .getRecipes()
      .subscribe((recipes: Recipie[]) => (this.recipies = recipes));
  }

  // refreshPeople() {
  //   this.api.getPeopleFromObject().subscribe((data) => {
  //     this.recipies = data;
  //   });
  // }
  // getPeopleGetAll() {
  //   this.api.getPeopleGetAll().subscribe((data) => {
  //     this.recipies = data;
  //   });

  //   this.loadData();
  // }

  // loadData = () => {
  //   this.api.get('/api/recipies').subscribe(({ recipies }: any): void => {
  //     this.recipies = recipies;
  //   });
  // };
}
