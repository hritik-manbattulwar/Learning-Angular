import { Component, Input } from '@angular/core';
import { IProfile } from 'src/app/models/IProfile';

@Component({
  selector: 'github-profile-details',
  templateUrl: './github-profile-details.component.html',
  styleUrls: ['./github-profile-details.component.css'],
})
export class GithubProfileDetailsComponent {
  @Input() userDetails: IProfile | any = {};
}
