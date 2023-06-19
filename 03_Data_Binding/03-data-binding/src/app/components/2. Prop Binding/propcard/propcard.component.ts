import { Component } from '@angular/core';

@Component({
  selector: 'app-propcard',
  templateUrl: './propcard.component.html',
  styleUrls: ['./propcard.component.css']
})
export class PropcardComponent {
  public image_1: string = "../../../../assets/img/card_1.jpg";
  public image_2: string = "../../../../assets/img/card_2.jpg";
  public image_3: string = "../../../../assets/img/card_3.jpg";
  public image_4: string = "../../../../assets/img/card_4.jpg";
  public tour: string[] = ["Paris", "Indonesia", "Bangok", "Malaysia"];

  public getImage1() {
    return this.image_1;
  }
}
