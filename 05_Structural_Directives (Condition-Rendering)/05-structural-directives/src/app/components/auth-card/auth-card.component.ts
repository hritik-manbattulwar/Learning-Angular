import { Component } from '@angular/core';

@Component({
  selector: 'auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.css']
})
export class AuthCardComponent {
  public isLoggedIn: boolean = false;
  public username: string | null = '';
  public login() {
    this.username = prompt("Enter your name");
    if (this.username !== null)
      this.isLoggedIn = true;
  }
  public logout() {
    this.isLoggedIn = false;
  }
}
