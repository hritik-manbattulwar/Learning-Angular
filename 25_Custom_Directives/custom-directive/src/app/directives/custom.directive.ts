import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[custom]',
})
export class CustomDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }
}
