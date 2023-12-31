import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers';
import * as stockReducer from '../../reducers/stock.reducer';
import * as stockActions from '../../actions/stock.actions';
import { IStock } from '../../models/IStock';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  public stocks: IStock[] = [];
  public errorMessage: string = '';
  public loading: boolean = false;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    // dispatch an action to fetch the data from server
    this.store.dispatch(stockActions.loadStocks());

    //get data from the store
    this.store.select(stockReducer.stockFeatureKey).subscribe((state) => {
      (this.stocks = state.stocks),
        (this.errorMessage = state.errorMesage),
        (this.loading = state.loading);
    });
  }
}
