import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public subscription1: Subscription | any;
  public subscription2: Subscription | any;
  public subscription3: Subscription | any;
  public posts = [
    {
      "id": 1,
      "name": "Hritik",
      "gender": "Male"
    },
    {
      "id": 2,
      "name": "Atharva",
      "gender": "Male"
    },
    {
      "id": 3,
      "name": "Laxmi",
      "gender": "Female"
    },
    {
      "id": 4,
      "name": "Krushna",
      "gender": "Male"
    },
    {
      "id": 5,
      "name": "Nilay",
      "gender": "Male"
    }
  ]
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    // Example 1
    const obs1 = interval(1000);

    this.subscription1 = obs1.pipe(map(data => 'Video ' + data)).subscribe((data: any) => {
      this.designUtilityService.addVideo(data, 'elContainer1')
    })

    setTimeout(() => {
      this.subscription1.unsubscribe()
    }, 5000)

    // Example 2
    const obs2 = interval(1000);

    this.subscription2 = obs2.pipe(map(data => data * 3)).subscribe((data: any) => {
      this.designUtilityService.addVideo(data, 'elContainer2')
    })

    setTimeout(() => {
      this.subscription2.unsubscribe()
    }, 5000)

    // Example 3
    const obs3 = from(this.posts);

    this.subscription3 = obs3.pipe(map(data => data.name)).subscribe((data: any) => {
      this.designUtilityService.addVideo(data, 'elContainer3')
    })

    setTimeout(() => {
      this.subscription2.unsubscribe()
    }, 5000)
  }

}
