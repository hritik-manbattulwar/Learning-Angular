import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {
  username: string = '';
  constructor(private designUtilityService: DesignUtilityService) { }
  ngOnInit(): void {
    this.designUtilityService.hello.next(true);
    this.designUtilityService.username.subscribe((res) => {
      this.username = res;
    })
  }
  ngOnDestroy(): void {
    this.designUtilityService.hello.next(false);
  }

}
