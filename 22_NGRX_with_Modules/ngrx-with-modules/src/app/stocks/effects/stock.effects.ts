import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StocksService } from '../services/stocks.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as stockActions from '../actions/stock.actions';

@Injectable()
export class StockEffects {
  constructor(private actions$: Actions, private stockService: StocksService) {}

  $getStocks = createEffect(() => {
    return this.actions$.pipe(
      ofType(stockActions.loadStocks),
      mergeMap((action) =>
        this.stockService.getStocks().pipe(
          map((stocks) => stockActions.loadStocksSuccess({ stocks })),
          catchError((error) => of(stockActions.loadStocksFailure({ error })))
        )
      )
    );
  });
}
