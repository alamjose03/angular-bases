import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // Primero se crea la instancia del emisor de eventos.
  @Output() // Se agrega el decorador de salida, indicando que este va a mandar información del evento de carácter.
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  }

  emitCharacter(): void {
    console.log(this.character);

    // Hacemos una pequeña validación para evitar que manden valores sin nombre.
    if(this.character.name.length === 0) return;

    // Se realiza la emisión del evento con la información necesaria.
    this.onNewCharacter.emit({...this.character});

    this.character.name = '';
    this.character.power = 0;
  }
}
