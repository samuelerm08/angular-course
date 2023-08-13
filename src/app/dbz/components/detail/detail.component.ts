import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Character, SpecialPower } from '../../interfaces/character';

@Component({
  selector: 'dbz-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() public character?: Character;
  @Output() public onModalOpened: EventEmitter<boolean> = new EventEmitter();

  public specialPwrs = {
    [SpecialPower.Henkidama]: "Henkidama",
    [SpecialPower.Kamehameha]: "Kamehameha",
    [SpecialPower.Masenko]: "Masenko",
    [SpecialPower.Kaioken]: "Kaioken"
  }

  public modalOpened(onOpenModal: boolean): void {
    this.onModalOpened.emit(onOpenModal);
  }
}