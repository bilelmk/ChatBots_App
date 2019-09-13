import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerutilisateurComponent } from './supprimerutilisateur.component';

describe('SupprimerprofilComponent', () => {
  let component: SupprimerutilisateurComponent;
  let fixture: ComponentFixture<SupprimerutilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerutilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
