import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Recipie } from 'src/app/shared/recipie';
import { Observable, Observer } from 'rxjs';
import { RecipiesApiService } from 'src/app/services/recipies-api.service';
import { AppRoutingModule } from 'src/app/routes/app-routing.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipie: Recipie | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipiesApiService: RecipiesApiService,
    public appRoutingModule: AppRoutingModule
  ) {}

  ngOnInit(): void {
    this.getRecipieDetails();
  }

  getRecipieDetails(): void {
    const recipieId = parseInt(
      this.route.snapshot.paramMap.get('recipieId')!,
      10
    );
    this.recipiesApiService
      .getRecipie(recipieId)
      .subscribe((recipie) => (this.recipie = recipie));
  }

  // getRecipieDetails(): void {
  //   const recipieId = parseInt(
  //     this.route.snapshot.paramMap.get(`recipieId`)!,
  //     15
  //   );
  //   this.recipiesApiService
  //     .getRecipie(recipieId, Recipie)
  //     .subscribe(({ recipie }: any): void => (this.recipie = recipie));
  // }
}
// this.recipiesApiService.addToList().subscribe(({ recipies }: any): void => {
//   this.recipies = recipies;
