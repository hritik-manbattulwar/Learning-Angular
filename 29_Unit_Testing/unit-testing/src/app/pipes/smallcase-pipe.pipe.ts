import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smallcasePipe',
})
export class SmallcasePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    return value.toLowerCase();
  }
}
