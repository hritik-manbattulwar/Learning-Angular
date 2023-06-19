import { Component } from '@angular/core';
import { IStock } from '../../models/IStock';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StocksService } from '../../services/stocks.service';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import * as stockReducer from '../../reducers/stock.reducer';
@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css'],
})
export class StockDetailsComponent {
  public stockName: string | null = '';
  public selectedStock: IStock | any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.stockName = param.get('name');
    });

    this.store.select(stockReducer.stockFeatureKey).subscribe((state) => {
      this.selectedStock = state.stocks.find(
        (stock) => stock.name === this.stockName
      );
    });
  }
}
