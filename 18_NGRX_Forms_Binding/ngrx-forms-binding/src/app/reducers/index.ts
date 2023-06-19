import { isDevMode } from '@angular/core';
import * as registerReducer from '../components/register/reducers/register.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

export interface State {
  [registerReducer.registerFeatureKey]: registerReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  [registerReducer.registerFeatureKey]: registerReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
