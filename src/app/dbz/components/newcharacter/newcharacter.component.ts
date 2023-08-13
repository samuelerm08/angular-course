import { Component, EventEmitter, Output } from '@angular/core';
import { Character, SpecialPower } from '../../interfaces/character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-newcharacter',
  templateUrl: './newcharacter.component.html',
  styleUrls: ['./newcharacter.component.scss']
})
export class NewCharacterComponent {

  @Output() public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  @Output() public onNewCreated: EventEmitter<boolean> = new EventEmitter();
  @Output() public onReturnToMain: EventEmitter<boolean> = new EventEmitter();
  constructor(private dbz: DbzService) { }

  public character: Character = {
    name: '',
    powerLevel: 0,
    age: 0,
    specialPower: 0
  }
  public specialPwrs = {
    [SpecialPower.Henkidama]: "Henkidama",
    [SpecialPower.Kamehameha]: "Kamehameha",
    [SpecialPower.Masenko]: "Masenko",
    [SpecialPower.Kaioken]: "Kaioken"
  }
  public addCharacter(created: boolean): void {
    this.dbz.onNewCharacter(this.character!).subscribe({
      next: char => {
        this.character.id = char.id
      },
      error: error => console.error(error),
      complete: () => this.onNewCreated.emit(created)
    }
    );
  }
  public toMainPage(returnToMainPage: boolean): void {
    this.onReturnToMain.emit(returnToMainPage);
  }
}