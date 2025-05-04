import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMonSi]'
})
export class MonSiDirective {
  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {}

  @Input() set appMonSi(condition: boolean) {
    condition ? this.vcr.createEmbeddedView(this.tpl) : this.vcr.clear();
  }
}
