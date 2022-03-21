import { Component, OnInit } from '@angular/core';
import { RecipiesApiService } from 'src/app/services/recipies-api.service';
import { Recipie } from 'src/app/shared/recipie';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  term = '';
  text = `Placeholder text`;
  color = '#023E41';
  weight = '900';

  recipies: Recipie[] = [];

  constructor(private recipiesApiService: RecipiesApiService) {}

  ngOnInit(): void {
    this.loadRecipies();
  }

  loadRecipies() {
    this.recipiesApiService.getAllRecipies().subscribe((recipies) => {
      this.recipies = recipies;
    });
  }
}
