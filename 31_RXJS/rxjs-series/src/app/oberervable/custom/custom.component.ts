import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, OnDestroy {
  public techStatus: string = ''
  public techStatus2: string = ''
  public techStatus3: string = ''
  public currentName: string = ''

  public subscription2: Subscription | any;
  constructor(private designUtilityService: DesignUtilityService) { }


  ngOnInit(): void {
    // Example - 01 Manual
    const obs1 = new Observable((observer) => {
      setTimeout(() => {
        observer.next('TypeScipt')
      }, 1000)
      setTimeout(() => {
        observer.next('JavaScript')
        // observer.error('Limit Excedded')
        // this.techStatus = 'error'

      }, 2000)
      setTimeout(() => {
        observer.next('Php')
        observer.complete()
        // this.techStatus = 'completed'
      }, 3000)
    })

    obs1.subscribe((data: any) => {
      this.designUtilityService.addVideo(data, 'elContainer1')
    }, (error) => {
      console.log(error)
      this.techStatus = 'error'
    }, () => {
      this.techStatus = 'completed'
    })


    const arr2 = ["Angular", "React", "Vue"]
    const obs2 = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr2[count])
        if (count >= 2) {
          // observer.error("Nothing")
          observer.complete()
        }
        count++;
      }, 1000)
    })

    this.subscription2 = obs2.subscribe((data: any) => {
      this.designUtilityService.addVideo(data, 'elContainer2');
    }, (error) => {
      console.log(error)
      this.techStatus2 = 'error'
    }, () => {
      this.techStatus2 = 'completed'
    })


    const arr3 = ['Hritik', 'Laxmi', 'Atharva', 'Sagar', 'Krushna', 'Aashay', 'Aditya', 'Abhishek', 'Prashik', 'Nilay']
    const obs3 = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr3[count])
        if (count >= arr3.length - 1) {
          // observer.error("Nothing")
          observer.complete()
        }
        count++;
      }, 1000)
    })

    obs3.subscribe((data: any) => {
      this.currentName = data
    }, (error) => {
      console.log(error)
      this.techStatus3 = 'error'
    }, () => {
      this.techStatus3 = 'completed'
    })

  }

  ngOnDestroy(): void {
    this.subscription2.unsubscribe()
  }
}
