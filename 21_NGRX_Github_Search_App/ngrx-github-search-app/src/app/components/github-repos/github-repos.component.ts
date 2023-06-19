import { Component, Input } from '@angular/core';
import { IRepos } from 'src/app/models/IRepos';

@Component({
  selector: 'github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css'],
})
export class GithubReposComponent {
  @Input() repos: IRepos[] = [];
}
