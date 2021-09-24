import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFondoBarra]'
})
export class FondoBarraDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#003459';
   }

}
