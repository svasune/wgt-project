import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from '../components/all-recipes/all-recipes.component';
import { MakeItYourselfComponent } from '../components/make-it-yourself/make-it-yourself.component';
import { RecipeListComponent } from '../components/recipe-list/recipe-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipe', pathMatch: 'full' },
  {
    path: 'recipe',
    component: AllRecipesComponent,
  },
  {
    path: 'recipe/:id',
    component: RecipeListComponent,
  },
  {
    path: 'all-recipes-component',
    component: AllRecipesComponent,
  },
  { path: 'make-it-yourself-component', component: MakeItYourselfComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AllRecipesComponent },
      { path: 'recipe/:id', component: RecipeListComponent },
      { path: 'recipe', component: AllRecipesComponent },
      { path: 'all-recipes', component: AllRecipesComponent },
      { path: 'make-it-yourself', component: MakeItYourselfComponent },
    ]),
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
