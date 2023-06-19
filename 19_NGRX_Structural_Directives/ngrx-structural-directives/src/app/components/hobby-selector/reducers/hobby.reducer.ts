import { createReducer, on } from '@ngrx/store';
import * as HobbyActions from '../actions/hobby.actions';

export const hobbyFeatureKey = 'hobby';

export interface State {
  eating: boolean;
  coding: boolean;
  sleeping: boolean;
}

export const initialState: State = {
  eating: false,
  coding: false,
  sleeping: false,
};

export const reducer = createReducer(
  initialState,
  on(HobbyActions.checkEating, (state) => {
    return {
      ...state,
      eating: !state.eating,
    };
  }),
  on(HobbyActions.checkCoding, (state) => {
    return {
      ...state,
      coding: !state.coding,
    };
  }),
  on(HobbyActions.checkSleeping, (state) => {
    return {
      ...state,
      sleeping: !state.sleeping,
    };
  })
);
