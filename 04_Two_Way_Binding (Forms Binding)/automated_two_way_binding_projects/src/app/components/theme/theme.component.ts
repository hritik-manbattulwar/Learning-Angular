import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  public image_1: string = "../../../assets/img/card_1.jpg";
  public theme: any;
}
