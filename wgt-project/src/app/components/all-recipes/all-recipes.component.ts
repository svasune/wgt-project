import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipiesApiService } from 'src/app/services/recipies-api.service';
import { Recipie } from 'src/app/shared/recipie';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
})
export class AllRecipesComponent implements OnInit {
  text = 'red';
  recipies: Recipie[] = [];
  public icon = 'favorite_border';

  constructor(private recipiesApiService: RecipiesApiService) {}

  ngOnInit(): void {
    this.loadRecipies();
  }
  loadRecipies() {
    this.recipiesApiService.getAllRecipies().subscribe((recipies) => {
      this.recipies = recipies;
    });
  }
  // addToFavorites() {
  //   this.recipiesApiService.addToList().subscribe(({ recipies }: any): void => {
  //     this.recipies = recipies;
  //   });
  // }
  public changeIcon(newIcon: string) {
    this.icon = newIcon;
  }
}

//** MOCK API **
// loadRecipies = () => {
//   this.api.get('/api/recipies').subscribe(({ recipies }: any): void => {
//     this.recipies = recipies;
//   });
// };
