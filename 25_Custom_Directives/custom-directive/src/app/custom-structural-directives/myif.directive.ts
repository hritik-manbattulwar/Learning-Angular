import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[myif]',
})
export class MyifDirective implements OnInit {
  @Input() myif: boolean = false;
  constructor(
    private templateRef: TemplateRef<unknown>,
    private vcr: ViewContainerRef
  ) { }

  ngOnInit(): void {
    if (this.myif) {
      this.vcr.createEmbeddedView(this.templateRef);
    } else {
      this.vcr.clear();
    }
  }
}
