import { createReducer, on } from '@ngrx/store';
import * as RegisterActions from '../actions/register.actions';
import { IUser } from 'src/app/models/IUser';

export const registerFeatureKey = 'register';

export interface State {
  user: IUser;
}

export const initialState: State = {
  user: {
    username: '',
    email: '',
    password: ''
  }
};

export const reducer = createReducer(
  initialState,
  on(RegisterActions.registerUser, (state, { user }) => {
    return {
      user: {
        username: user.username,
        email: user.email,
        password: user.password
      }
    };
  })
);
