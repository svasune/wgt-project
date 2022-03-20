import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appVegetarian]',
})
export class VegetarianDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.innerHTML = '<span class="material-icons">spa</span>';
  }

  @Input() appVegetarian = '';
}
