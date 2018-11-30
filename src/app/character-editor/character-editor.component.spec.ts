import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEditorComponent } from './character-editor.component';

describe('CharacterEditorComponent', () => {
  let component: CharacterEditorComponent;
  let fixture: ComponentFixture<CharacterEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check get random', () => {
    let tooLow = false;
    let tooHigh = false;

    // Try doing 100 random numbers from 1 to 6, and see
    // if I ever get lower than 1, or higher than 6.
    for (let i = 1; i <= 100; i++) {
        const newnumber = component.GetRandom(1, 6);

        if (newnumber < 1) {
            tooLow = true;
        }

        if (newnumber > 6) {
            tooHigh = true;
        }
    }

    expect(tooLow).toBeFalsy();
    expect(tooHigh).toBeFalsy();
  });
});
