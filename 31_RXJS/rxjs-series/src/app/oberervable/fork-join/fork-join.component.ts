import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { forkJoin, fromEvent, map, take, zip } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements AfterViewInit {
  names: string[] = ['Hritik', 'Laxmi', 'Atharva', 'Krushna', 'Sagar', 'Aashay', 'Abhishek', 'Aditya', 'Nilay', 'Prashik']
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'brown'];

  //template ref
  @ViewChild('colorRef')
  colorRef: ElementRef | any;
  @ViewChild('nameRef')
  nameRef: ElementRef | any;

  constructor() { }

  ngAfterViewInit(): void {
    const namesObs = fromEvent<any>(this.nameRef.nativeElement, 'change').pipe(map(event => event.target.value), take(4))
    const colorObs = fromEvent<any>(this.colorRef.nativeElement, 'change').pipe(map(event => event.target.value), take(3))

    // Example 1 Zip
    zip(namesObs, colorObs).subscribe(([name, color]) => {
      // console.log(name, color)
      this.createBox(name, color, 'elContainer1')
    })
    // Example 2 Fork join
    forkJoin(namesObs, colorObs).subscribe(([name, color]) => {
      // console.log(name, color)
      this.createBox(name, color, 'elContainer2')
    })
  }


  createBox(name: string, color: string, containerId: string) {
    let el = document.createElement('div')
    el.innerText = name
    el.setAttribute('class', color)
    document.getElementById(containerId)?.appendChild(el)
  }
}
