import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { LoadingBarService } from 'ngx-loading-bar';
import { debounce, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  public requestedData1: string = ''
  public requestedData2: string = ''
  @ViewChild('myInput1')
  myInput1: ElementRef | any;
  @ViewChild('myInput2')
  myInput2: ElementRef | any;
  constructor() { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {

    // Example 1
    const searchForm1 = fromEvent<any>(this.myInput1.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(1000)
      )


    searchForm1.subscribe((res) => {
      console.log(res)
      this.requestedData1 = res
      setTimeout(() => {
        this.requestedData1 = ''
      }, 2000);
    })
    // Example 2
    const searchForm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      )


    searchForm2.subscribe((res) => {
      console.log(res)
      this.requestedData2 = res
      setTimeout(() => {
        this.requestedData2 = ''
      }, 2000);
    })

  }
}
