import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import * as githubAction from '../actions/github.actions';
import * as githubReducer from '../reducers/github.reducer';
import { IProfile } from 'src/app/models/IProfile';
import { IRepos } from 'src/app/models/IRepos';
@Component({
  selector: 'github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css'],
})
export class GithubAppComponent {
  public githubUsername: string = '';
  public githubProfile: IProfile | any;
  public githubRepos: IRepos[] = [];
  public errorMessage: string = '';
  public loading: boolean = false;
  constructor(private store: Store<State>) { }

  public submitUser() {
    if (this.githubUsername == undefined && this.githubUsername == '') {
      alert('Please Fill up the fields');
    } else {
      // dispatch actions to get profile data & repos data
      this.store.dispatch(
        githubAction.getProfileData({ username: this.githubUsername })
      );
      this.store.dispatch(
        githubAction.getReposData({ username: this.githubUsername })
      );

      // get the state data from NGRX Store
      this.store
        .pipe(select(githubReducer.githubFeatureKey))
        .subscribe((state) => {
          this.githubProfile = state.githubProfile;
          this.githubRepos = state.githubRepos;
          this.loading = state.loading;
          this.errorMessage = state.errorMessage;
        });
    }
  }
}
