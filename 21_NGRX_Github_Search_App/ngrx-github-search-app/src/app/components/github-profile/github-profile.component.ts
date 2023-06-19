import { Component, Input } from '@angular/core';
import { IProfile } from 'src/app/models/IProfile';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent {
  @Input() profile: IProfile | any;
}
