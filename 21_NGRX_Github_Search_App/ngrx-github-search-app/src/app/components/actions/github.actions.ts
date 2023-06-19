import { createAction, props } from '@ngrx/store';
import { IProfile } from 'src/app/models/IProfile';
import { IRepos } from 'src/app/models/IRepos';

export const getProfileData = createAction(
  '[Github] get Profile Data',
  props<{ username: string }>()
);

export const getProfileDataSuccess = createAction(
  '[Github] get Profile Data Success',
  props<{ profile: IProfile }>()
);

export const getProfileDataFailure = createAction(
  '[Github] get Profile Data Failure',
  props<{ error: string }>()
);

// For Repos
export const getReposData = createAction(
  '[Github] get Repos Data ',
  props<{ username: string }>()
);

export const getReposDataSuccess = createAction(
  '[Github] get Repos Data Success',
  props<{ repos: IRepos[] }>()
);

export const getReposDataFailure = createAction(
  '[Github] get Repos Data Failure',
  props<{ error: string }>()
);
