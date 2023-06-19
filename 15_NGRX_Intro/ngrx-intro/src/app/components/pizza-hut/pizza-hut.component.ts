import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { buyPizza } from './pizza-hut-actions';
@Component({
  selector: 'app-pizza-hut',
  templateUrl: './pizza-hut.component.html',
  styleUrls: ['./pizza-hut.component.css']
})
export class PizzaHutComponent implements OnInit {
  public pizzaCount: Number = 0;

  constructor(private store: Store<{ pizza: { pizzaCount: number } }>) { }

  ngOnInit(): void {
    this.store.pipe(select('pizza')).subscribe((store) => {
      this.pizzaCount = store.pizzaCount;
    })
  }

  public clickBuyPizza() {
    this.store.dispatch(buyPizza())
  }
}
