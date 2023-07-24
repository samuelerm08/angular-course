import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    // The following import is needed to use ng directives (*ngIf, *ngFor, etc...) in this child module 
    // - Parent Module it'll be importing BrowserModule
    imports: [
        CommonModule
    ],
    exports: [
        HeroComponent,
        ListComponent
    ]
})
export class HeroesModule { }