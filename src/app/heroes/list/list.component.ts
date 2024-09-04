import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHero?: string;

  public heroNames: string[] =
    ['Spider Man',
      'Iron Man',
      'Hulk',
      'Thor',
      'She Hulk']

  removeHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
