import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksComponent } from './stocks.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StockEffects } from './effects/stock.effects';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { StockListComponent } from './components/stock-list/stock-list.component';


@NgModule({
  declarations: [
    StocksComponent,
    StockDetailsComponent,
    StockListComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers }),
    EffectsModule.forFeature([StockEffects])
  ]
})
export class StocksModule { }
