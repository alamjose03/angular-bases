import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  // Instancia del event emitter para crear la emisión del indice, el cual es con el  decorador
  // Output, esto para indicar al padre (main) que esta instancia va a mandar información.
  @Output()
  public onDeleteCharacter: EventEmitter<string | undefined> = new EventEmitter();

  @Input() // Decorador que indica que se va a recibir información en la propiedad,
  // en caso de no recibir se usa la que esta por defecto.
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  /**
   * Método que se ejecuta cuando se da clic en la X, y el cual hace la emisión del indice
   * seleccionado, mediante el event emitter.
   * @param index indice del elemento seleccionado.
   */
  onDelete(id?: string): void {
    if (!id) return;
    this.onDeleteCharacter.emit(id);
  }

  /**
   * Cuando se ejecuta el método luego de dar clic en la X, se ejecuta el console log y el método de
   * emisión.
   * @param index indice del elemento seleccionado.
   */
  deleteCharacter(index: number): void {
    console.log(index);
  }
}
