import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe> ();

    private recipes: Recipe[] = [
        new Recipe(
            'Sub', 
            'y u m',
             'http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/07/20/32/food-paradise-102-ss-001.rend.hgtvcom.966.544.suffix/1491584380240.jpeg',
            [
                new Ingredient('roll',6,'feet'),
                new Ingredient('steak',2,'lbs')
            ]
        ),
        new Recipe(
            'test Recipe',
            'a test recipe',
            'https://eat24hours.com/files/cuisines/v4/thai.jpg?e24v=103?e24v=178?e24v=178',
            [
                new Ingredient('Meat',2,'lbs'),
                new Ingredient('Meat',2,'lbs')
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id:number) {
        return this.recipes.slice()[id];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        console.log('a');
        this.slService.addIngredients(ingredients);
    }
}
