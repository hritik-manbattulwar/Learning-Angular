import { isDevMode } from '@angular/core';
import * as customerReducer from '../customers/reducers/customer.reducer';
import * as stockReducer from '../stocks/reducers/stock.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

export interface State {
  [customerReducer.customerFeatureKey]: customerReducer.State;
  [stockReducer.stockFeatureKey]: stockReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  [customerReducer.customerFeatureKey]: customerReducer.reducer,
  [stockReducer.stockFeatureKey]: stockReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
