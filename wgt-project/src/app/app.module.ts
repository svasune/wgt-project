import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { MakeItYourselfComponent } from './components/make-it-yourself/make-it-yourself.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { NavSearchComponent } from './components/nav-search/nav-search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllRecipesComponent,
    MakeItYourselfComponent,
    NavSearchComponent,
    SearchBarComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
