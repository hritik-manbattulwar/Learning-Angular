import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks.component';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';

const routes: Routes = [
  { path: '', component: StocksListComponent },
  { path: 'list', component: StocksListComponent },
  { path: 'list/:name', component: StockDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
