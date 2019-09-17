import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterprofilComponent } from './ajouterprofil.component';

describe('AjouterconnaissanceComponent', () => {
  let component: AjouterprofilComponent;
  let fixture: ComponentFixture<AjouterprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
