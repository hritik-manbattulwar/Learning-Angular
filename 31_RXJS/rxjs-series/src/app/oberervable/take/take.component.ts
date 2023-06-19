import { Component, OnInit } from '@angular/core';
import { Subscription, from, fromEvent, interval, map, take, takeLast, takeUntil, tap, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  public sub1: Subscription | any;
  public sub2: Subscription | any;
  public sub3: Subscription | any;
  constructor(private designUtilityService: DesignUtilityService) { }
  ngOnInit(): void {
    const arr = ["Hritik", "Laxmi", "Atharva", "Sagar", "Krushna", "Abhishek", "Aditya", "Aashay", "Prashik", "Nilay"]
    const namesource = from(arr);
    // Example 1
    this.sub1 = namesource.pipe(take(5)).subscribe((data) => {
      // console.log(data)
      this.designUtilityService.addVideo(data, "elContainer1")
    })

    // Example 2
    this.sub2 = namesource.pipe(takeLast(5)).subscribe((data) => {
      console.log(data)
      this.designUtilityService.addVideo(data, "elContainer2")
    })
    // Example 3
    const source = interval(1000)
    let condition = fromEvent(document, 'click')
    this.sub3 = source.pipe(takeUntil(condition), map(data => 'Video ' + data)).subscribe((data) => {
      console.log(data)
      this.designUtilityService.addVideo(data, "elContainer3")
    })
  }

}

