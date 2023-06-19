import { Component } from '@angular/core';
import { IProfile } from 'src/app/models/IProfile';
import { IRepos } from 'src/app/models/IRepos';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'github-search-app',
  templateUrl: './github-search-app.component.html',
  styleUrls: ['./github-search-app.component.css']
})
export class GithubSearchAppComponent {
  public user: string = '';
  public profileData: IProfile | any;
  public reposData: IRepos[] = [];

  constructor(private githubService: GithubService) { }

  public submitUser() {
    this.githubService.searchProfile(this.user).subscribe((data) => {
      this.profileData = data;
    })
    this.githubService.searchRepos(this.user).subscribe((data) => {
      this.reposData = data;
    })
  }
}
