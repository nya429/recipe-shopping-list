import { Subscription } from 'rxjs/Subscription';
import { Component,
   OnInit,
   OnDestroy,
   ViewChild,
   ElementRef,
   EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('unitInput') unitInput: ElementRef;
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  unitInputtest: any = "11";

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index:number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredients()[this.editedItemIndex];
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
          unit: this.editedItem.unit
        });
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount, 
                                        this.unitInput.nativeElement.value);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);  
    }

    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onDeleteShoppingList() {
    this.onClearShoppingList();  
    this.shoppingListService.removeIngredient(this.editedItemIndex);
  }

  onClearShoppingList() {
    this.editMode = false;
    this.shoppingListForm.reset();
    return false;
  }
}
