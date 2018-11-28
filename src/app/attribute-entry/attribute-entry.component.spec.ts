import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeEntryComponent } from './attribute-entry.component';

describe('AttributeEntryComponent', () => {
  let component: AttributeEntryComponent;
  let fixture: ComponentFixture<AttributeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
