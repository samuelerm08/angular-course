import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public name: string = "hulk";
  public age: number = 24;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(): void {
  
    this.name = "Spiderman";
  }
  changeHeroAge(): void {
    this.age = 50;
  }
}
