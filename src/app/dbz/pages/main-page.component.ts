import { Component } from '@angular/core';
import { Character, SpecialPower } from '../interfaces/character';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private dbz: DbzService) { }
  get characters(): Character[] {
    return this.dbz.characters;
  }
  get isNewCreated(): boolean {
    return this.dbz.isNewCreated;
  }
  createNewCharacter(isCreated: boolean): void {
    this.dbz.createNewCharacter(isCreated);
  }
  deleteCharacterById(id: string): void {
    this.dbz.deleteCharacterById(id);
  }
  onNewCharacter(character: Character): void {
    this.dbz.onNewCharacter(character);
  } 
}