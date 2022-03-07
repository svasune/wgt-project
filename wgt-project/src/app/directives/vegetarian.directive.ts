import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appVegetarian]',
})
export class VegetarianDirective {
  constructor(private el: ElementRef) {}

  @Input() appVegetarian = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('<span class="material-icons">spa</span>');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('<span class="material-icons">spa</span>');
  }

  private highlight(_text: string) {
    this.el.nativeElement.innerHTML = '<span class="material-icons">spa</span>';
  }
}
