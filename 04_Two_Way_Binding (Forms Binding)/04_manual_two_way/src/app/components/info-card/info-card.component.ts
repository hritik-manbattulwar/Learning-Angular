import { Component } from '@angular/core';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  public username: string = '';

  public changeUsername(event: any): void {
    this.username = event.target.value
  }
}
