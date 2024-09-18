import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    <code>promise|async</code>:
    <button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
    <span>Wait for it... {{ greeting | async }}</span>
    <!--output '$0.26'-->
    <p>A: {{ a | currency }}</p>

    <!--output 'CA$0.26'-->
    <p>A: {{ a | currency: '₹' }} {{'₹'+ a}}</p>

    <!--output 'CAD0.26'-->
    <p>A: {{ a | currency: 'CAD' : 'code' }}</p>

    <!--output 'CA$0,001.35'-->
    <p>B: {{ b | currency: 'CAD' : 'symbol' : '4.2-2' }}</p>

    <!--output '$0,001.35'-->
    <p>B: {{ b | currency: 'CAD' : 'symbol-narrow' : '4.2-2' }}</p>

    <!--output '0 001,35 CA$'-->
    <p>B: {{ b | currency: 'CAD' : 'symbol' : '4.2-2' : 'fr' }}</p>

    <!--output 'CLP1' because CLP has no cents-->
    <p>B: {{ b | currency: 'CLP' }}</p>
    <p>Today is {{today | date}}</p>
   <p>Or if you prefer, {{today | date:'fullDate'}}</p>
   <p>The time is {{today | date:'h:mm a z'}}</p>
  </div>`,
  styleUrl: './pipe.component.css'
})

export class PipeComponent {
  greeting: Promise<string> | null = null;
  arrived: boolean = false;
  a: number = 0.259;
  b: number = 1.3495;
  today: number = Date.now();
  private resolve: Function | null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }
}
