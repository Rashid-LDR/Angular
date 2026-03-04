import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter=signal(0);
  increment(){
    this.counter.set(this.counter()+1);
  }
  decrement(){
    this.counter.update((val)=> val-1);
  }
  resetfunc()
  {
    this.counter.set(0);
  }
}
