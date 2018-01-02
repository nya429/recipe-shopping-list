import { Component,
   OnInit,
   ViewChild,
   ElementRef,
   EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  onAddShoppingList(unitInput) {
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value, unitInput);
    this.shoppingListService.addIngredient(newIngredient);
    // this.ingredients.emit({
    //   name: this.nameInput.nativeElement.value,
    //   amount: this.amountInput.nativeElement.value,
    //   unit: unitInput
    // });
  }

  onDeleteShoppingList() {
    console.log('de');
  }

  onClearShoppingList() {
    console.log('clear');
  }
}
