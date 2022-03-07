import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeItYourselfComponent } from '../../components/make-it-yourself/make-it-yourself.component';

const routes: Routes = [
  {
    path: '',
    component: MakeItYourselfComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeItYourselfRoutingModule {}
