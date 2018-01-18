import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Input() recipeItem: {name: string, description: string, imagePath: string, ingredients: Ingredient[]};
  @Input() recipeItem: Recipe;
  @Input() index: number;
  
  ngOnInit() {
  }

  // onSelect() {
  //   this.recipeService.recipeSelected.emit(this.recipeItem);
  // }
}
