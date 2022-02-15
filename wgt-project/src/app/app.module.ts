import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { MakeItYourselfComponent } from './components/make-it-yourself/make-it-yourself.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { NavSearchComponent } from './components/nav-search/nav-search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { RecipesApi } from './services/RecipesApi';

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
    MatDividerModule,
    MatListModule,
    MatTabsModule,
  ],
  providers: [ApiService, RecipesApi],
  bootstrap: [AppComponent],
})
export class AppModule {}
