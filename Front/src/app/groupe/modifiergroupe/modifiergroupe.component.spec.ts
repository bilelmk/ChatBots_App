import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiergroupeComponent } from './modifiergroupe.component';

describe('ModifierconnaissanceComponent', () => {
  let component: ModifiergroupeComponent;
  let fixture: ComponentFixture<ModifiergroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiergroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiergroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
