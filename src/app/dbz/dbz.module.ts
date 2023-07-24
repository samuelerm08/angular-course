import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NewCharacterComponent } from './components/newcharacter/newcharacter.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    NewCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]  
})
export class DbzModule { }