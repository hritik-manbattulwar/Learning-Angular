import { Component } from '@angular/core';

@Component({
  selector: 'app-msgcard',
  templateUrl: './msgcard.component.html',
  styleUrls: ['./msgcard.component.css']
})
export class MsgcardComponent {
  public msg: string = "Hello";

  //Three functions for changing the same variable not optimized
  /*  
   public sayGoodMorning(){
     this.msg="Good Morning";
   }
   public sayGoodAfternoon(){
     this.msg="Good Afternoon";
   }
   public sayGoodEvening(){
     this.msg="Good Evening";
   } 
   */

  // Create a Single Functions rather than above three functions
  public displayMsg(value: string) {
    this.msg = value;
  }
}
