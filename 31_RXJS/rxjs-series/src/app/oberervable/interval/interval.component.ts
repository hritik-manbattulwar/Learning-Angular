import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  public obMsg: string = '';
  videoSubscription: Subscription | any;
  constructor(public designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    // const broadCastVideos = interval(1000);
    //timer(delay,interval)
    const broadCastVideos = timer(3000, 1000);

    this.videoSubscription = broadCastVideos.subscribe((data) => {
      this.obMsg = 'Video ' + data;
      this.designUtilityService.addVideo(this.obMsg, 'elContainer1');
      this.designUtilityService.addVideo(this.obMsg, 'elContainer2');
      this.designUtilityService.addVideo(this.obMsg, 'elContainer3');
      if (data >= 5) {
        this.videoSubscription.unsubscribe();
      }
    })
  }


}
