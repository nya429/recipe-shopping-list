import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CanDeactivateGuard } from './../auth/deactivate-guard.service';
import { RoutResolver } from './recipe-resolver.service';
import { AuthGard } from './../auth/auth-guard.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';

const recipesRoutes: Routes = [
    {path: 'recipes',
        component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGard], canDeactivate: [CanDeactivateGuard]},
            { path: ':id', component: RecipeDetailComponent, resolve: {recipe: RoutResolver} },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGard], canDeactivate: [CanDeactivateGuard]}
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}