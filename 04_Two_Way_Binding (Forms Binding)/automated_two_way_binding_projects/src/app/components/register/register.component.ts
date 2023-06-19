import { Component } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user: IUser = {
    username: '',
    email: '',
    password: ''
  }
  public register() {
    console.log(this.user)
  }
}
