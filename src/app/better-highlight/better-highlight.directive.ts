import { Directive, OnInit, ElementRef, Renderer, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


  @Input() defaultColor: string = 'transparent';
  @Input() heiglightColor: string = 'blue';
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private eleRef: ElementRef, private render: Renderer2) { }

  ngOnInit() {
         // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
            this.defaultColor = this.defaultColor;
  }

  @HostListener('mouseenter') mousover1211(eventData: Event) {
// this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.heiglightColor;
  }

  @HostListener('mouseleave') mouseleaver65651(eventData: Event) {
  //  this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
               // this.backgroundColor = 'transparent';
               this.backgroundColor = this.defaultColor;
  }

}
