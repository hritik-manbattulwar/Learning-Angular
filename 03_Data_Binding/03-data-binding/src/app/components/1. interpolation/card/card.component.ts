import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public msg: string = "Good Morning";
  public price: number = 580.6000;
  public time: string = new Date().toLocaleTimeString();

  public getDate() {
    return new Date().toLocaleDateString();
  }

  /*  public getTime() {
     return new Date().toLocaleTimeString()
   } 
 */
  public getTime() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

}
