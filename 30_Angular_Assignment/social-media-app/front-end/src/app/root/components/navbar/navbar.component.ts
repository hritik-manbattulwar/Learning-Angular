import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/user/models/IUser';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  public user: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  public isLogin() {
    return this.userService.isLoggedIn();
  }

  public clickLogout() {
    this.userService.logOut();
    this.router.navigate(['/']);
  }

  public getUser() {
    this.user = this.userService.getUserData();
  }
}
