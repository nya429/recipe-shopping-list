import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
// import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { SigninComponent } from './auth/signin/signin.component';
// import { AuthGard } from './auth/auth-guard.service';
// import { CanDeactivateGuard } from './auth/deactivate-guard.service';
// import { RoutResolver } from './recipes/recipe-resolver.service';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren:'./recipes/recipes.module#RecipesModule'},
    {path: 'shoppinglist', component: ShoppingListComponent},

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
