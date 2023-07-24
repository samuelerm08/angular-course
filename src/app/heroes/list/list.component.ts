import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Hulk', 'Batman', 'Ironman', 'Wonderwoman'];
  public deletedHero?: string;

  deleteLastHero(): void {
    this.deletedHero = this.heroes.pop();
  }
}
