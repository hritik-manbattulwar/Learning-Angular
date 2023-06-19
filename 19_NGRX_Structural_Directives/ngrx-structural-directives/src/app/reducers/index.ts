import { isDevMode } from '@angular/core';
import * as hobbyReducer from '../components/hobby-selector/reducers/hobby.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

export interface State {
  [hobbyReducer.hobbyFeatureKey]: hobbyReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  [hobbyReducer.hobbyFeatureKey]: hobbyReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
