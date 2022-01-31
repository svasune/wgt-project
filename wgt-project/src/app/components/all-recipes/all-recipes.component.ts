import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Recipie } from 'src/app/shared/recipie';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
})
export class AllRecipesComponent implements OnInit {
  // private recipie: Recipie = {
  //   name: 'string',
  //   timeToCook: {
  //     hours: 24,
  //     minutes: 60,
  //     seconds: 60,
  //   },
  //   imageUrl: 'string',
  //   isVegetarian: true,
  //   isVegan: true,
  //   ingredients: [
  //     {
  //       ingredientId: 0,
  //       name: 'string',
  //       quantity: 0,
  //       unit: 'string',
  //     },
  //   ],
  // };

  recipies: Recipie[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData = () => {
    this.api.get().subscribe(({ recipies }: any): void => {
      this.recipies = recipies;
    });
  };
}
