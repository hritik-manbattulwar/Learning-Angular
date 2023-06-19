import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  public sub1: Subscription | any;
  constructor(private designUtilityService: DesignUtilityService) { }
  ngOnInit(): void {
    const arr = ["Hritik", "Laxmi", "Atharva", "Sagar", "Krushna", "Abhishek", "Aditya", "Aashay", "Prashik", "Nilay"]
    const obs1 = interval(1000);
    this.sub1 = obs1.pipe(tap(data => {
      if (data == 4) {
        this.sub1.unsubscribe()
      }
    }),
      map(data => arr[data])).subscribe((data) => {
        console.log(data)
        this.designUtilityService.addVideo(data, "elContainer1")
      })
  }

}
