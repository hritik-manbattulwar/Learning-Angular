import { Component, OnInit } from '@angular/core';
import { IFollowers } from 'src/app/user/models/IFollowers';
import { IUser } from 'src/app/user/models/IUser';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public user: IUser | any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUserData()
    this.user = this.userService.getUser(this.user.email)
    console.log('From Timeline', this.user)

  }
}
