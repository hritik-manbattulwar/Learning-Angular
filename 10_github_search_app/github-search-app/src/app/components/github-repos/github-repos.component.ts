import { Component, Input } from '@angular/core';

@Component({
  selector: 'github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent {
  @Input() repos: any[] = [];
}
