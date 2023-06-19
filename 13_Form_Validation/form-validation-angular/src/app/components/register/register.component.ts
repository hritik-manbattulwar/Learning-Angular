import { Component } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UsernameValidator } from './Validators/UsernameValidator';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public courses: string[] = ['Angular', 'React.js', 'Vue.js', 'Node.js'];
  public isEmpty: boolean | any;
  public isSubmitted: boolean | any;
  public isApiFailed: boolean = false;
  public message: string = '';
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  public registrationForm = this.formBuilder.group({
    username: ['', [Validators.required, UsernameValidator.regExpvalidator]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    course: ['', [Validators.required]]
  })



  public getUsername() {
    return this.registrationForm.get('username');
  }

  public getEmail() {
    return this.registrationForm.get('email');
  }

  public getPassword() {
    return this.registrationForm.get('password');
  }

  public getCourse() {
    return this.registrationForm.get('course');
  }


  public submitUser() {
    /* let user = {
      username : this.getUsername().value,
      email : this.getEmail().value,
      password : this.getPassword().value,
      course : this.getCourse().value
    };  */
    let user: IUser | any = this.registrationForm.value
    console.log(this.registrationForm)
    if (this.registrationForm.status === "VALID") {
      this.isEmpty = false;
      this.userService.register(user).subscribe((data) => {
        this.message = data.msg;
        this.isSubmitted = true;
      }, (error) => {
        this.isApiFailed = true;

      })
    }
    else {
      this.isEmpty = true;
      this.isSubmitted = false;
    }

  }
}
