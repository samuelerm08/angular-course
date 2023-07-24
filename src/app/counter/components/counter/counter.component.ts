import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<p>{{counter}}</p>
    <button (click)="increasedBy(1)">+1</button>
    <button (click)="increasedBy(-1)">-1</button>
    <button (click)="reset()">reset</button>`
})

export class CounterComponent {
    public counter: number = 0;

    increasedBy(value: number): void {
        this.counter += value;
    }
    reset(): void {
        this.counter = 0;
    }
}