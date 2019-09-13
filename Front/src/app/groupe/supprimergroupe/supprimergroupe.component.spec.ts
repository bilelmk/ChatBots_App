import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimergroupeComponent } from './supprimergroupe.component';

describe('SupprimerprofilComponent', () => {
  let component: SupprimergroupeComponent;
  let fixture: ComponentFixture<SupprimergroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimergroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimergroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
