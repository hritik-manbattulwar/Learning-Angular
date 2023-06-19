import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-enrolment',
  templateUrl: './enrolment.component.html',
  styleUrls: ['./enrolment.component.css']
})
export class EnrolmentComponent {
  public courses: string[] = ['Angular', 'React.js', 'Vue.js', 'Node.js'];
  public user: IUser = {
    username: '',
    password: '',
    email: '',
    course: ''
  }
  public isEmpty: boolean = false;
  public isSubmitted: boolean = false;
  public isApiFailed: boolean = false;
  public message: string = '';

  constructor(private userService: UserService) { }

  public submitEnroll(formValues: any) {
    //  console.log(formValues)
    // let {username,password,email,course}=this.user;
    if (formValues.status === "VALID") {
      this.isEmpty = false;
      this.userService.enroll(this.user).subscribe((data) => {
        this.message = data.msg;
        this.isSubmitted = true;
      }, (err) => {
        // console.log(err)
        this.isApiFailed = true;
      });
    }
    else {
      this.isEmpty = true;
      this.isSubmitted = false;
    }
  }
}
