import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from '../shaerd/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import * as FromApp from '../ngrx-store/app.redusers';
import * as ShoppingListActions from './ngrx-store/shopping-list.actions'; 


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

	ingredients: Observable<{ingredients: Ingredient[] }>;
  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<FromApp.AppState>,
    ) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  ingredientClicked(index){
    //this.shoppingListService.ingrediantClicked.emit(index);
    this.store.dispatch(new ShoppingListActions.EditIngredient(index));
  }
}
