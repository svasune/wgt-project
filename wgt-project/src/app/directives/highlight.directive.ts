import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input() appHighlight = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#023E41');
    this.bold('900');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.bold('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

  private bold(weight: string) {
    this.el.nativeElement.style.fontWeight = weight;
  }
}
