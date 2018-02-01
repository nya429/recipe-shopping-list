import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

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
        this.httpClient.get<Recipe[]>('https://ngrecipe-ff888.firebaseio.com/recipes.json?auth=' + token, {
            observe: 'body',
            responseType: 'json'
        })
        // this.http.get('https://ngrecipe-ff888.firebaseio.com/recipes.json?auth=' + token)
        .map(
            (recipes) => {
            // (response: Response) => { 
                //  const recipes: Recipe[] = response.json();
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

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(
          'Something bad happened; please try again later.');
    }
}
