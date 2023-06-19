import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {


  constructor(private designUtilityService: DesignUtilityService) { }
  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(map(data => 'TechVideo #' + (data + 1)), take(5));
    const sourceComedy = interval(1000).pipe(map(data => 'ComedyVideo #' + (data + 1)), take(3));
    const sourceNews = interval(1000).pipe(map(data => 'NewsVideo #' + (data + 1)), take(4));

    const finalObs = concat(sourceTech, sourceComedy, sourceNews)

    finalObs.subscribe((data) => {
      this.designUtilityService.addVideo(data, 'elContainer1')
    })
  }

}
