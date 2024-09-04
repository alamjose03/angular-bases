import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter: {{ counter }} </h3>
    <button (click)="increaseBy('+')">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy('-')">-1</button>
  `
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: string): void {
    switch (value) {
      case '+':
        this.counter += 1;
        break;
      case '-':
        this.counter -= 1;
        break;
      default:
        throw new Error('Operador no soportado');
    }
  }

  reset(): void {
    this.counter = 10;
  }

}
