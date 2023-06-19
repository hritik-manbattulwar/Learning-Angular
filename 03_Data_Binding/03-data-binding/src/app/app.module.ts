import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/1. interpolation/card/card.component';
import { PropcardComponent } from './components/2. Prop Binding/propcard/propcard.component';
import { MsgcardComponent } from './components/3. Events Binding/msgcard/msgcard.component';
import { CounterComponent } from './components/3. Events Binding/counter/counter.component';
import { InfocardComponent } from './components/4. Template Ref Variable/infocard/infocard.component';
import { StopwatchComponent } from './components/3. Events Binding/stopwatch/stopwatch.component';
import { ProductCardComponent } from './components/3. Events Binding/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PropcardComponent,
    MsgcardComponent,
    CounterComponent,
    InfocardComponent,
    StopwatchComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
