import { Injectable } from '@angular/core';
import { Character, SpecialPower } from '../interfaces/character';
import { v4 as Id } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: Id(),
      name: "Goku",
      powerLevel: 100,
      age: 100,
      specialPower: SpecialPower.Henkidama
    },
    {
      id: Id(),
      name: "Cell",
      powerLevel: 100,
      age: 10000,
      specialPower: SpecialPower.Kamehameha
    },
    {
      id: Id(),
      name: "Gohan",
      powerLevel: 200,
      age: 16,
      specialPower: SpecialPower.Masenko
    }
  ];
  public newCharacterEnabled!: boolean;
  public isNewCreated!: boolean;
  createNewCharacter(createEnabled: boolean): void {
    this.isNewCreated = createEnabled;
  }
  onNewCharacter(character: Character): void {
    if (character !== null)
      this.characters.push(character);
    else
      console.log("Null");
  }
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  } 
}