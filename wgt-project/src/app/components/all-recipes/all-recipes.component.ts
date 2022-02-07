import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Recipie } from 'src/app/shared/recipie';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
})
export class AllRecipesComponent implements OnInit {
  recipies: Recipie[] = [];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData = () => {
    this.api.get().subscribe(({ recipies }: any): void => {
      this.recipies = recipies;
    });
  };
}
