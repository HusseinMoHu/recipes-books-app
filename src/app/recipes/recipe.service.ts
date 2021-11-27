import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
        new Ingredient('Bread', 2),
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Filet_de_truite_aux_baies_roses_au_restaurant_La_Cocagne_%28Lyon%29.jpg/640px-Filet_de_truite_aux_baies_roses_au_restaurant_La_Cocagne_%28Lyon%29.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 3),
        new Ingredient('Cheese', 4),
      ]
    ),
    new Recipe(
      'Pumpkin Seeds',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/African_recipes.jpg/640px-African_recipes.jpg',
      [
        new Ingredient('Pumpkin Seeds', 1),
        new Ingredient('Sugar', 2),
        new Ingredient('Salt', 3),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // slice() returns a copy of the array, so we don't modify the original array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
