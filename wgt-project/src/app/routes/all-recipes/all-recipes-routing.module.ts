import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRecipesComponent } from '../../components/all-recipes/all-recipes.component';

const routes: Routes = [
  {
    path: '',
    component: AllRecipesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllRecipesRoutingModule {}
