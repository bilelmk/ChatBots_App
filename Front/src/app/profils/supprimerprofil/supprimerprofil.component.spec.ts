import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerprofilComponent } from './supprimerprofil.component';

describe('SupprimerprofilComponent', () => {
  let component: SupprimerprofilComponent;
  let fixture: ComponentFixture<SupprimerprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
