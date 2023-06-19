import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { IFollowers } from 'src/app/user/models/IFollowers';
import { IFollowing } from 'src/app/user/models/IFollowing';
import { IUser } from 'src/app/user/models/IUser';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name = 'Get Current Url Route Demo';
  currentRoute: string = '';
  public userData: IUser | any;
  public user: IUser | any;
  public followers: IFollowers[] | any;
  public followings: IFollowing[] | any;

  constructor(private userService: UserService, private router: Router) {
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationEnd) {
            this.currentRoute = event.url.substring(event.url.lastIndexOf('/') + 1);
          }
        });
  }


  ngOnInit(): void {
    this.userData = this.userService.getUserData()
    this.user = this.userService.getUser(this.userData.email)
    console.log('From DashBoard', this.user)
    this.followers = this.userService.getFollowers(this.user.followers)
    console.log('From DashBoard', this.followers)
    this.followings = this.userService.getFollowings(this.user.following)
    console.log('From DashBoard', this.followings)
  }

}
