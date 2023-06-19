import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-pizza',
  templateUrl: './buy-pizza.component.html',
  styleUrls: ['./buy-pizza.component.css']
})
export class BuyPizzaComponent {
  public pizzaCount: number = 25;

  public buyPizza() {
    this.pizzaCount = (this.pizzaCount - 1 < 0) ? 0 : this.pizzaCount - 1;
  }
}
