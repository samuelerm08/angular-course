import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NewCharacterComponent } from './components/newcharacter/newcharacter.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './components/detail/detail.component';
import { EditcharacterComponent } from './components/editcharacter/editcharacter.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    NewCharacterComponent,
    DetailComponent,
    EditcharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]  
})
export class DbzModule { }