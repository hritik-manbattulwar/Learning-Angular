import { createReducer, on } from '@ngrx/store';
import * as githubActions from '../actions/github.actions';
import { IProfile } from 'src/app/models/IProfile';
import { IRepos } from 'src/app/models/IRepos';
export const githubFeatureKey = 'github';

export interface State {
  loading: boolean;
  errorMessage: string;
  githubUsername: string;
  githubProfile: IProfile | null;
  githubRepos: IRepos[];
}

export const initialState: State = {
  loading: false,
  errorMessage: '',
  githubUsername: '',
  githubProfile: null,
  githubRepos: [],
};

export const reducer = createReducer(
  initialState,
  on(githubActions.getProfileData, (state, { username }) => {
    return {
      ...state,
      githubUsername: username,
      loading: true,
    };
  }),
  on(githubActions.getProfileDataSuccess, (state, { profile }) => {
    return {
      ...state,
      loading: false,
      githubProfile: profile,
    };
  }),
  on(githubActions.getProfileDataFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      errorMessage: error,
    };
  }),
  on(githubActions.getReposData, (state, { username }) => {
    return {
      ...state,
      githubUsername: username,
      loading: true,
    };
  }),
  on(githubActions.getReposDataSuccess, (state, { repos }) => {
    return {
      ...state,
      loading: false,
      githubRepos: repos,
    };
  }),
  on(githubActions.getProfileDataFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      errorMessage: error,
    };
  })
);
