import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListRoutingModule } from './recipe-list-routing.module';
import { RecipeListComponent } from 'src/app/components/recipe-list/recipe-list.component';

@NgModule({
  imports: [CommonModule, RecipeListRoutingModule],
  declarations: [RecipeListComponent],
})
export class RecipeListModule {}
