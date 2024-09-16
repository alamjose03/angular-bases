import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root' // Esto indica que este servicio va ser un singleton en toda la aplicación.
  // si esto no se usa, entonces hay que definir lo en los providers del modulo principal.
  // No importa donde lo utilice, siempre tendré el valor exactamente como se encuentra en ese momento performance,
  // siempre y cuando sea por inyección de dependencias.

})
export class DbzService {

  public character: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500,
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
  ];

  addCharacter(character: Character): void {
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power,
    // }

    // Operador expred ... = Esto es lo mismo que esta comentado arriba, prácticamente indica que todo
    // lo que llega en carácter lo esparza en las propiedades del nuevo objeto que se esta creando.
    const newCharacter: Character = { id: uuid(), ...character };

    this.character.push(newCharacter);
  }

  /**
   * Método que se encarga de eliminar los elementos del listado, el cual
   * se emite en base al hijo list.
   * @param index indice del elemento a eliminar.
   */
  // onDeleteCharacter(index: number): void {
  //   this.character.splice(index, 1);
  // }
  deleteCharacterById(id?: string): void {
    // Devuelve todos los objetos menos el que sea el id recibido.
    this.character = this.character.filter(character => character.id !== id);
  }
}
