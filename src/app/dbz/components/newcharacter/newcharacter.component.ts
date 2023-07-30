import { Component, EventEmitter, Output } from '@angular/core';
import { Character, SpecialPower } from '../../interfaces/character';
import {v4 as Id} from 'uuid';

@Component({
  selector: 'dbz-newcharacter',
  templateUrl: './newcharacter.component.html',
  styleUrls: ['./newcharacter.component.scss']
})
export class NewCharacterComponent {

  @Output() public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  @Output() public onNewCreated: EventEmitter<boolean> = new EventEmitter();

  public character: Character = {    
    id: Id(),
    name: '',
    powerLevel: 0,
    age: 0,
    specialPower: 0
  };  
  public specialPwrs = {
    [SpecialPower.Henkidama]: "Henkidama",
    [SpecialPower.Kamehameha]: "Kamehameha",
    [SpecialPower.Masenko]: "Masenko",
    [SpecialPower.Kaioken]: "Kaioken"
  }

  addCharacter(created: boolean): void {
    this.onNewCharacter.emit(this.character);
    this.onNewCreated.emit(created);
  }
}