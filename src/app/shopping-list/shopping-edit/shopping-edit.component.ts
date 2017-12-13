import { Component,
   OnInit, 
   ViewChild, 
   ElementRef, 
   Output, 
   EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddShoppingList() {
    console.log('add');
    console.log(this.nameInput);
    console.log(this.amountInput);
    this.IngredientAdded.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
      unit:''
    });
  }

  onDeleteShoppingList() {
    console.log('de');
  }

  onClearShoppingList() {
    console.log('clear');
  }
}
