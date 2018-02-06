import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { RoutResolver } from '../recipes/recipe-resolver.service';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { AuthInterceptor } from './../shared/auth.interceptor';
import { CanDeactivateGuard } from './../auth/deactivate-guard.service';
import { AuthGard } from './../auth/auth-guard.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
        RoutResolver,
        // the order of setting up interceptor equal the order the request pass through interceptors
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
        ],
})
export class CoreModule { }
