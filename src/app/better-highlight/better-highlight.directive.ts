import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'grey';
  @Input('appBetterHighlight') highlightColor: string = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'yellow');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
