import { isDevMode } from '@angular/core';
import * as githubReducer from '../components/reducers/github.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

export interface State {
  [githubReducer.githubFeatureKey]: githubReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  [githubReducer.githubFeatureKey]: githubReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
