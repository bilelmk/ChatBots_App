import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterutilisateurComponent } from './ajouterutilisateur.component';

describe('AjouterprofilComponent', () => {
  let component: AjouterutilisateurComponent;
  let fixture: ComponentFixture<AjouterutilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterutilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
