import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>

    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>`,
})
export class CounterComponent {

  public counter: number = 17;

  increaseBy(value: number){
    this.counter += value
  }

  reset(){
    this.counter = 17;
  }

  constructor() {}
}
