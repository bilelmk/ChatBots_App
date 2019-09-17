import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierconnaissanceComponent } from './modifierconnaissance.component';

describe('ModifierconnaissanceComponent', () => {
  let component: ModifierconnaissanceComponent;
  let fixture: ComponentFixture<ModifierconnaissanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierconnaissanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierconnaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
