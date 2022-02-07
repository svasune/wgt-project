import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Recipie } from 'src/app/shared/recipie';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipies: Recipie[] = [];
  asyncTabs: Observable<ExampleTab[]>;

  constructor(private api: ApiService) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'Desciption', content: 'Content 1' },
          { label: 'Ingredients', content: 'Content 2' },
          { label: 'Third', content: 'Content 3' },
        ]);
      }, 1000);
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData = () => {
    this.api.get().subscribe(({ recipies }: any): void => {
      this.recipies = recipies;
    });
  };
}
