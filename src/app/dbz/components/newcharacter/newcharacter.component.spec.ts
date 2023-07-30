import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharacterComponent } from './newcharacter.component';

describe('NewcharacterComponent', () => {
  let component: NewCharacterComponent;
  let fixture: ComponentFixture<NewCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCharacterComponent]
    });
    fixture = TestBed.createComponent(NewCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});