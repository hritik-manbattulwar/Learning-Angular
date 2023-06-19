import { Component } from '@angular/core';

@Component({
  selector: 'show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css'],
})
export class ShowPasswordComponent {
  public inputType: string = 'password';

  public showPassword() {
    // Using ternary
    this.inputType =
      this.inputType === 'password'
        ? (this.inputType = 'text')
        : (this.inputType = 'password');

    // Using If-Else
    /* if(this.inputType==='password'){
      this.inputType='text';
    }else{
      this.inputType='password';
    } */
  }
}
