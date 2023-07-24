import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcharacterComponent } from './newcharacter.component';

describe('NewcharacterComponent', () => {
  let component: NewcharacterComponent;
  let fixture: ComponentFixture<NewcharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcharacterComponent]
    });
    fixture = TestBed.createComponent(NewcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});