import { AuthInterceptor } from './shared/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RecipesModule } from './recipes/recipes.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGard } from './auth/auth-guard.service';
import { CanDeactivateGuard } from './auth/deactivate-guard.service';
import { RoutResolver } from './recipes/recipe-resolver.service';
import { EmailRegValidatorDirective } from './auth/email-validation.directive';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/sopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './core/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
  ],
  providers: [ShoppingListService,
              RecipeService,
              DataStorageService,
              AuthService,
              AuthGard,
              CanDeactivateGuard,
              RoutResolver,
              //the order of setting up interceptor equal the order the request pass through interceptors
              {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
              {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
              ],
  bootstrap: [AppComponent]
})
export class AppModule  { }
