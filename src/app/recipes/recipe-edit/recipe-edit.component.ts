import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { CanComponentDeactivate } from '../../auth/deactivate-guard.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, CanComponentDeactivate {
  id: number;
  editMode = false;
  // recipe: Recipe;
  recipeForm: FormGroup;
  isFinished = false;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeIamgPath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode ) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeIamgPath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
              'unit': new FormControl(ingredient.unit),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeIamgPath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });

    console.log(this.recipeForm );
  }

  onSubmit() {
      // const newRecipe = new Recipe(
      //   this.recipeForm.value['name'],
      //   this.recipeForm.value['imagePath'],
      //   this.recipeForm.value['description'],
      //   this.recipeForm.value['ingredients']
      // );
      if (!this.authService.isAuthenticated()) {
        this.router.navigate(['/signin']);
      }

      if (this.editMode) {
        this.recipeService.updateRecipe(this.id,  this.recipeForm.value);
      } else {
        this.recipeService.addRecipe( this.recipeForm.value);
      }
      this.isFinished = true;
      this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'unit': new FormControl(''),
    }));

  }

  onCancle() {
    this.isFinished = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/signin']);
    }
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
      if (this.recipeForm.dirty && !this.isFinished) {
        return confirm('Discard change');
      } else {
        return true;
      }
  }
}
