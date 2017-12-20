import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe> ();

    private recipes: Recipe[] = [
        new Recipe('test Recipe', 'a test recipe', 'https://eat24hours.com/files/cuisines/v4/thai.jpg?e24v=103?e24v=178?e24v=178'),
        new Recipe('test Recipe', 'a test recipe', 'https://eat24hours.com/files/cuisines/v4/thai.jpg?e24v=103?e24v=178?e24v=178'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
