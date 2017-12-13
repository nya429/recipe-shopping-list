import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe> ();
  recipes: Recipe[] = [
    new Recipe('test Recipe', 'a test recipe', 'https://eat24hours.com/files/cuisines/v4/thai.jpg?e24v=103?e24v=178?e24v=178'),
    new Recipe('test Recipe', 'a test recipe', 'https://eat24hours.com/files/cuisines/v4/thai.jpg?e24v=103?e24v=178?e24v=178'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
 