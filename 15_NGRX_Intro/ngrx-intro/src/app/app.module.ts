import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuyPizzaComponent } from './components/buy-pizza/buy-pizza.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PizzaHutComponent } from './components/pizza-hut/pizza-hut.component';
import { pizzaReducer } from './components/pizza-hut/pizza-hut-reducers';
@NgModule({
  declarations: [
    AppComponent,
    BuyPizzaComponent,
    PizzaHutComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({pizza:pizzaReducer}),
    StoreDevtoolsModule.instrument()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
