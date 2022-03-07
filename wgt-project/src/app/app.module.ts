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
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routes/app-routing.module';

import { AppComponent } from './app.component';

import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { MakeItYourselfComponent } from './components/make-it-yourself/make-it-yourself.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { ApiService } from './services/api.service';
import { RecipiesApiService } from './services/recipies-api.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { VegetarianDirective } from './directives/vegetarian.directive';

@NgModule({
  declarations: [
    AppComponent,
    AllRecipesComponent,
    MakeItYourselfComponent,
    NavigationComponent,

    SearchBarComponent,
    FooterComponent,
    HighlightDirective,
    VegetarianDirective,
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
    MatTableModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatButtonToggleModule,
  ],
  providers: [ApiService, RecipiesApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
