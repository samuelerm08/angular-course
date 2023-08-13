import { Component } from '@angular/core';
import { Character, SpecialPower } from '../interfaces/character';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  public character?: Character;
  public isNewCreated?: boolean;
  public modalOpened?: boolean;
  public editModalOpened?: boolean;  
  public isMainPage?: boolean;
  constructor(private dbz: DbzService) { }
  public createNewCharacter(isNotCreated: boolean): void {
    this.isNewCreated = isNotCreated;
    this.isMainPage = false;
  }

  public onModalOpened(modalOpened: boolean): void {
    this.modalOpened = modalOpened;
  }

  public onEditCharacter(editCharacterModal: boolean): void {
    this.editModalOpened = editCharacterModal;
  }

  public getCharacter(character: Character): void {
    this.character = character;
  }

  public onMainpage(returned?: boolean): void {
    this.isMainPage = returned;
  }
}