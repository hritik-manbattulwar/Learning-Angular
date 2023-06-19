import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UsernameValidator{
    static regExpvalidator(control:AbstractControl) : ValidationErrors | any{
    let regExp = /^[a-zA-Z0-9_]+$/;
     if(regExp.test(control.value)){
       return null;
     }
     return { regExpValidator : true }
    }
}