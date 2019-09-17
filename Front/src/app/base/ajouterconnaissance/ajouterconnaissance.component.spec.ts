import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterconnaissanceComponent } from './ajouterconnaissance.component';

describe('AjouterconnaissanceComponent', () => {
  let component: AjouterconnaissanceComponent;
  let fixture: ComponentFixture<AjouterconnaissanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterconnaissanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterconnaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
