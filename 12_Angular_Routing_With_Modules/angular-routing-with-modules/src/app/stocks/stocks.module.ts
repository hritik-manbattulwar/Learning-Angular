import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksComponent } from './stocks.component';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';


@NgModule({
  declarations: [
    StocksComponent,
    StocksListComponent,
    StockDetailsComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
