import { Component } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import { DbzService } from "../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) { }

  /**
   * Get que devuelve la información del character del servicio, pero usando ... para que cada
   * uno sea una instancia diferente.
   */
  get character(): Character[] {
    return [...this.dbzService.character];
  }

  onDeleteCharacter(id?: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
