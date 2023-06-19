import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
})
export class AppendPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return 'City Name: ' + value; //City Name: Nagpur
  }
}
