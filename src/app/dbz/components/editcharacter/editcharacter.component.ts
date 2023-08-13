import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Character, SpecialPower } from '../../interfaces/character';

@Component({
  selector: 'dbz-editcharacter',
  templateUrl: './editcharacter.component.html',
  styleUrls: ['./editcharacter.component.scss']
})
export class EditcharacterComponent {
  @Input() public character?: Character;
  @Output() public onEditModalOpened: EventEmitter<boolean> = new EventEmitter();
  constructor(private dbz: DbzService) { }

  public specialPwrs = {
    [SpecialPower.Henkidama]: "Henkidama",
    [SpecialPower.Kamehameha]: "Kamehameha",
    [SpecialPower.Masenko]: "Masenko",
    [SpecialPower.Kaioken]: "Kaioken"
  }    

  public editCharacter(modified: boolean): void {
    this.dbz.editCharacter(this.character?.id!, this.character!).subscribe({
      next: (character) => this.character = character,
      error: (e) => console.error(e),
      complete: () => this.onEditModalOpened.emit(modified)
    });
  }

  public modalOpened(onOpenModal: boolean): void {
    this.onEditModalOpened.emit(onOpenModal);
  }
}