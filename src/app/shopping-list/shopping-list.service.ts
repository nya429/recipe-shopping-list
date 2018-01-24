import { Ingredient } from './../shared/ingredient.model';
// import { EventEmitter } from '@angular/core';

import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    // ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    startStar
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 2),
        new Ingredient('Flour', 2, 'cup')
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        //... spread operator
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
        console.log(this.ingredients);
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        console.log( this.ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    removeIngredient(index: number) {
        this.ingredients.splice(index,1);
        console.log( this.ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}
