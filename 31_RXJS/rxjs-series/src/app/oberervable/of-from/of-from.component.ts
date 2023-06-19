import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(public designUtilityService: DesignUtilityService) { }
  obsMsg: any;

  ngOnInit(): void {

    // Off
    const Obs1 = of("Hritik", "Atharva", "Laxmi");
    Obs1.subscribe((data) => {
      this.designUtilityService.addVideo(data, "elContainer1");
    })

    const Obs2 = of({ a: "Hritik", b: "Atharva", c: "Laxmi" });
    Obs2.subscribe((data) => {
      this.obsMsg = data;
    })

    // From
    const Obs3 = from(["Hritik", "Atharva", "Laxmi"]);
    Obs3.subscribe((data) => {
      this.designUtilityService.addVideo(data, "elContainer3");
    })

    // From -> Promise to Obervale
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve("Hritik")
        // resolve(["Hritik", "Atharva", "Laxmi"])
      }, 3000)
    })

    const Obs4 = from(promise);
    Obs4.subscribe(data => {
      const temp: any = data
      this.designUtilityService.addVideo(temp, "elContainer4")
    })


    // From -> String to Obervale
    const Obs5 = from('Hritik');
    Obs5.subscribe(data => {
      this.designUtilityService.addVideo(data, "elContainer5")
    })

  }
}
