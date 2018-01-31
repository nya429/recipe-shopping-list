import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Injectable()
export class RoutResolver implements Resolve<Recipe> {
    constructor(private recipeService: RecipeService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
                return this.recipeService.getRecipe(+route.params['id']);
            }
}