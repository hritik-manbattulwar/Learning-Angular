import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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