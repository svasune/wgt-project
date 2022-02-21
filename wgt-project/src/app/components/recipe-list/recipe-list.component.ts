import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Recipie } from 'src/app/shared/recipie';
import { Observable, Observer } from 'rxjs';
import { RecipiesApiService } from 'src/app/services/recipies-api.service';
import { AppRoutingModule } from 'src/app/routes/app-routing.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipies: Recipie[] = [];

  constructor(
    private recipiesApiService: RecipiesApiService,
    public appRoutingModule: AppRoutingModule
  ) {}

  ngOnInit(): void {
    this.addToFavorites();
  }
  addToFavorites() {
    this.recipiesApiService.addToList().subscribe(({ recipies }: any): void => {
      this.recipies = recipies;
    });
  }
}
