import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { count, fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(public designUtility: DesignUtilityService) { }

  @ViewChild('addBtn') addBtn: ElementRef | any;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count: number = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((data) => {
      let countVal: string = "Video" + count++;
      this.designUtility.addVideo(countVal, 'elContainer1')
      this.designUtility.addVideo(countVal, 'elContainer2')
    })
  }



}
