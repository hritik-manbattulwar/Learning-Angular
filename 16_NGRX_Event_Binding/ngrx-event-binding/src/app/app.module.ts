import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WishMessageComponent } from './components/wish-message/wish-message.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WishMessageReducer } from './components/wish-message/wish-message-reducers';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { productFeatureKey } from './components/product-card/product-card-reducers';
import * as productReducer from './components/product-card/product-card-reducers'
@NgModule({
  declarations: [
    AppComponent,
    WishMessageComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({wishReducer:WishMessageReducer,[productReducer.productFeatureKey]:productReducer.reducer}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
