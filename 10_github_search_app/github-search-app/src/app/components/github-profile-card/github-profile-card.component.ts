import { Component, Input } from '@angular/core';
import { IProfile } from 'src/app/models/IProfile';

@Component({
  selector: 'github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrls: ['./github-profile-card.component.css']
})
export class GithubProfileCardComponent {
  @Input() userData: IProfile | any = {}
}
