import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective implements OnInit {
  // @Input() tiltOptions: any;
  // private tiltInstance: any;
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    VanillaTilt.init(this.el.nativeElement,this.tiltOptions || {})
  }

  ngOnDelete(){
    if(this.tiltInstance){
      this.tiltInstance.destroy();
    }
  }
}
