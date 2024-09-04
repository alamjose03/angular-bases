import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iron Man';
  public age: number = 45;

  // Creación de gets.
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return ` ${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spider Man';
  }

  changeAge(): void {
    this.age = 21;
  }

  resetForm(): void {
    this.name = 'Iron Man';
    this.age = 45;

  }
}
