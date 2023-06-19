import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/models/IUser';

export const registerUser = createAction(
  '[Register] Register User',
  props<{ user: IUser }>()
);
