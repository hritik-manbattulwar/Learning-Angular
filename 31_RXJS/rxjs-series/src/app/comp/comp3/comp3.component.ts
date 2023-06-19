import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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