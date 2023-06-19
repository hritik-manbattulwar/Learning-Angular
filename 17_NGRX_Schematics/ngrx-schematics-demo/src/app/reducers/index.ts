import { isDevMode } from '@angular/core';
import * as productReducer from '../components/product-item/reducers/product-item.reducer'
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';


export interface State {
  [productReducer.productItemFeatureKey]:productReducer.State
}

export const reducers: ActionReducerMap<State> = {
  [productReducer.productItemFeatureKey]:productReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
