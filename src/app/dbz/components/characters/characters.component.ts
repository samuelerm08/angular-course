import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character, SpecialPower } from '../../interfaces/character';

@Component({
  selector: 'dbz-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  @Input() public characters: Character[] = [];
  @Output() public onCharacterDelete: EventEmitter<string> = new EventEmitter();
  public specialPwrs = {
    [SpecialPower.Henkidama]: "Henkidama",
    [SpecialPower.Kamehameha]: "Kamehameha",
    [SpecialPower.Masenko]: "Masenko",
    [SpecialPower.Kaioken]: "Kaioken"
  }

  deleteCharacter(id: string) {
    this.onCharacterDelete.emit(id);    
  } 
}