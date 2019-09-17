import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerconnaissanceComponent } from './supprimerconnaissance.component';

describe('SupprimerconnaissanceComponent', () => {
  let component: SupprimerconnaissanceComponent;
  let fixture: ComponentFixture<SupprimerconnaissanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerconnaissanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerconnaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
