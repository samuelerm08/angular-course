import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Character, SpecialPower } from '../../interfaces/character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  @Input() public isModalOpened?: boolean;
  @Input() public isEditModalOpened?: boolean;
  @Output() public onDetail: EventEmitter<Character> = new EventEmitter();
  @Output() public onEdit: EventEmitter<Character> = new EventEmitter();
  @Output() public onModalOpened: EventEmitter<boolean> = new EventEmitter();
  @Output() public onEditModalOpened: EventEmitter<boolean> = new EventEmitter();

  public character?: Character;
  get characters(): Character[] {
    return this.dbz.characters;
  }

  constructor(private dbz: DbzService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  public specialPwrs = {
    [SpecialPower.Henkidama]: "Henkidama",
    [SpecialPower.Kamehameha]: "Kamehameha",
    [SpecialPower.Masenko]: "Masenko",
    [SpecialPower.Kaioken]: "Kaioken"
  }

  public editCharacter(character: Character, onModalOpening: boolean): void {
    this.onEdit.emit(character);
    this.onEditModalOpened.emit(onModalOpening);
  }

  public deleteCharacter(id?: number): void {
    this.dbz.deleteCharacterById(id).subscribe({
      next: (character) => this.character!.id = character.id,
      error: (e) => console.error(e),
      complete: () => this.getCharacters()
    });
  }

  public getById(character: Character, onModalOpening: boolean): void {
    this.onDetail.emit(character);
    this.onModalOpened.emit(onModalOpening);
  }

  private getCharacters(): void {
    this.dbz.getAllCharacters().subscribe({
      next: (data) => this.dbz.characters = data
    });
  }
}