import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public courses: string[] = ['Angular', 'React.js', 'Vue.js', 'Node.js'];
  public message: string = '';
  public isEmpty: boolean | any;
  public isSubmitted: boolean | any;
  public isApiFailed: boolean = false;

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$')]),
    course: new FormControl('', [Validators.required])
  })

  constructor(private userService: UserService) { }

  public submitLogin() {
    let user: IUser | any = this.loginForm.value
    if (this.loginForm.status === "VALID") {
      this.userService.register(user).subscribe((data) => {
        this.isEmpty = false;
        this.message = data.msg;
        this.isSubmitted = true;
      }, (err) => {
        this.isApiFailed = true;
      })
    } else {

    }
  }

  public getUsername() {
    return this.loginForm.get('username');
  }
  public getEmail() {
    return this.loginForm.get('email');
  }
  public getPassword() {
    return this.loginForm.get('password');
  }
  public getCourse() {
    return this.loginForm.get('course');
  }
}
