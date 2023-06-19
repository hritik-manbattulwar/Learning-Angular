import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  public counter: number = 0;
  public counterId: any;
  public isRunning: boolean = false;

  public start(): void {
    if (!this.isRunning) {
      this.counterId = setInterval(() => {
        this.counter = this.counter + 1;
      }, 50)
      this.isRunning = true;
    }
  }
  public stop(): void {
    clearInterval(this.counterId);
    this.isRunning = false;
  }
  public reset(): void {
    clearInterval(this.counterId);
    this.counter = 0;
    this.isRunning = false;
  }
}
