import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public hello: boolean = false;

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtilityService.hello.subscribe((res) => {
      this.hello = res
    })
  }
}
