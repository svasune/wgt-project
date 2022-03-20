import { Component, OnInit } from '@angular/core';
import { RecipiesApiService } from 'src/app/services/recipies-api.service';
import { Recipie } from 'src/app/shared/recipie';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  displayedColumns: string[] = ['recipieId', 'name'];
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

  // filterItems(arr: any, query: any) {
  //   return arr.filter(function (el: any) {
  //     return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });
  // }
  // searchInput.addEventListener("input", e => {
  //   const value = e.target.value.toLowerCase()
  //   users.forEach(user => {
  //     const isVisible =
  //       user.name.toLowerCase().includes(value) ||
  //       user.email.toLowerCase().includes(value)
  //     user.element.classList.toggle("hide", !isVisible)
  //   })
  // })

  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(res => res.json())
  //   .then(data => {
  //     users = data.map(user => {
  //       const card = userCardTemplate.content.cloneNode(true).children[0]
  //       const header = card.querySelector("[data-header]")
  //       const body = card.querySelector("[data-body]")
  //       header.textContent = user.name
  //       body.textContent = user.email
  //       userCardContainer.append(card)
  //       return { name: user.name, email: user.email, element: card }
  //     })
  //   })
}
