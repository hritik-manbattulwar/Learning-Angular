import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  username: string = '';
  constructor(private designUtilityService: DesignUtilityService) { }
  ngOnInit(): void {
    this.designUtilityService.username.subscribe((res) => {
      this.username = res
    })
  }

  onChange(uname: any) {
    this.designUtilityService.username.next(uname.value)
  }
}
