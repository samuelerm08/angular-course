import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, SpecialPower } from '../interfaces/character';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private baseUrl: string = "https://localhost:5001/api/character/";

  public characters: Character[] = [];
  public character?: Character;
  public isNewCreated!: boolean;

  constructor(private httpClient: HttpClient) { }

  public getAllCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.baseUrl + "GetAllCharacters");
  }

  public onNewCharacter(character: Character): Observable<Character> {
    const body = {
      name: character.name,
      powerLevel: parseInt(character.powerLevel.toString()),
      age: parseInt(character.age.toString()),
      specialPower: parseInt(character.specialPower.toString())
    }
    return this.httpClient.post<Character>(this.baseUrl + "InsertCharacter", body);
  }

  public deleteCharacterById(id?: number): Observable<Character> {
    return this.httpClient.delete<Character>(this.baseUrl + "DeleteCharacter/" + id);
  }

  public editCharacter(id: number, character: Character): Observable<Character> {
    const body = {
      id: character.id,
      name: character.name,
      powerLevel: parseInt(character.powerLevel.toString()),
      age: parseInt(character.age.toString()),
      specialPower: parseInt(character.specialPower.toString())
    }
    return this.httpClient.put<Character>(this.baseUrl + "UpdateCharacter/" + id, body);
  }
}