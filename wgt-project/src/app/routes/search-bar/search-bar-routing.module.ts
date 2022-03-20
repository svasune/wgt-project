import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';

const routes: Routes = [
  {
    path: '',
    component: SearchBarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBarRoutingModule {}
