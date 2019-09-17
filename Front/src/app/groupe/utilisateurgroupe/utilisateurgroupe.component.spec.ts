import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurgroupeComponent } from './utilisateurgroupe.component';

describe('SupprimerconnaissanceComponent', () => {
  let component: UtilisateurgroupeComponent;
  let fixture: ComponentFixture<UtilisateurgroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurgroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
