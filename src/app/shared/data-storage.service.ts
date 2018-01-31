import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor (private http: Http, private httpClient: HttpClient,
                private  recipeService: RecipeService,
                private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.httpClient.put('https://ngrecipe-ff888.firebaseio.com/recipes.json?auth=' + token,
        // return this.http.put('https://ngrecipe-ff888.firebaseio.com/recipes.json?auth=' + token,
                      this.recipeService.getRecipes());
    }

    fetchRecipes() {
        const token = this.authService.getToken();
        this.httpClient.get<Recipe[]>('https://ngrecipe-ff888.firebaseio.com/recipes.json?auth=' + token)
        // this.http.get('https://ngrecipe-ff888.firebaseio.com/recipes.json?auth=' + token)
        .map(
            (recipes) => { // httpClient return data from response
            // (response: Response) => { 
                 //const recipes: Recipe[] = response.json();
                 for (let recipe of recipes) {
                     if (recipe['ingredients']) {
                         recipe['ingredients'] = [];
                     }
                 }
                 return recipes;
            }
        ).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.updateRecipes(recipes);
            }
        );
    }
}
