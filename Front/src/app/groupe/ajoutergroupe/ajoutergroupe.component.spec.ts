import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutergroupeComponent } from './ajoutergroupe.component';

describe('AjouterconnaissanceComponent', () => {
  let component: AjoutergroupeComponent;
  let fixture: ComponentFixture<AjoutergroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutergroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutergroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
