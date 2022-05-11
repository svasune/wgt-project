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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NavigationComponent } from './components/navigation/navigation.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routes/app-routing.module';

import { AppComponent } from './app.component';

import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { MakeItYourselfComponent } from './components/make-it-yourself/make-it-yourself.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

import { ApiService } from './services/api.service';
import { RecipiesApiService } from './services/recipies-api.service';

import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { VegetarianDirective } from './directives/vegetarian.directive';
import { MatSelectModule } from '@angular/material/select';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DARK_MODE_OPTIONS } from 'angular-dark-mode';
import { DarkModeToggleComponent } from './themes/dark-mode-toggle.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
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
    SearchFilterPipe,
    FavoritesComponent,
    DarkModeToggleComponent,
    LoginComponent,
    SignupComponent,
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
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
  ],
  providers: [
    ApiService,
    RecipiesApiService,
    {
      provide: DARK_MODE_OPTIONS,
      useValue: {
        darkModeClass: 'dark-mode',
        lightModeClass: 'light-mode',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
