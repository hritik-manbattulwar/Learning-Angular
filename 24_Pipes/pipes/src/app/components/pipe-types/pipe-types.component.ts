import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-types',
  templateUrl: './pipe-types.component.html',
  styleUrls: ['./pipe-types.component.css'],
})
export class PipeTypesComponent {
  public name: string = 'Hritik';
  public salary: number = 572000;
  public marks: number = 87;
  public random: number = 6723.2342;
  public today: Date = new Date();
  public fruits: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'PineApple',
    'Watermelon',
    'Starwberry',
    'Coconut',
  ];

  public bio = {
    name: 'Hritik',
    city: 'Nagpur',
    company: 'Newput',
  };

  public dummyText =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quasi quam sint veniam laudantium aspernatur perferendis? Totam iste tempora aperiam corporis sapiente, odio quasi sed. Dolorem possimus ex vitae hic?';
}
