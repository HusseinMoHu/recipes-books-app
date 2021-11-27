import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Filet_de_truite_aux_baies_roses_au_restaurant_La_Cocagne_%28Lyon%29.jpg/640px-Filet_de_truite_aux_baies_roses_au_restaurant_La_Cocagne_%28Lyon%29.jpg'
    ),
    new Recipe(
      'More Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/African_recipes.jpg/640px-African_recipes.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    // slice() returns a copy of the array, so we don't modify the original array
    return this.recipes.slice();
  }
}
