import { Component } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent {
  public serverMsg = "";
  public send(elem: HTMLElement) {
    this.serverMsg = elem.innerText;
  }
}
