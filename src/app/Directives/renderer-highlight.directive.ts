import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent'
  @HostBinding('style.color') color:string = ''
  @HostBinding('style.border') border:string = '2px solid rgba(96, 102, 208, 0.7)'
  @Input() selected: boolean = false;

  constructor(private element:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event){
    if(!this.selected){
      this.backgroundColor = '#F9A826'
      this.color = 'white'
      this.border = '2px solid transparent'
    }
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    if(!this.selected){
      this.backgroundColor = 'transparent'
      this.color = '#6066D0'
      this.border = '2px solid rgba(96, 102, 208, 0.7)'
    }
  }
}
