import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from '../components/all-recipes/all-recipes.component';
import { MakeItYourselfComponent } from '../components/make-it-yourself/make-it-yourself.component';

const routes: Routes = [
  { path: '', component: AllRecipesComponent },
  {
    path: 'recipe/:id',
    component: AllRecipesComponent,
  },
  {
    path: 'all-recipes-component',
    component: AllRecipesComponent,
  },
  { path: 'make-it-yourself-component', component: MakeItYourselfComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
