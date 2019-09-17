import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnlistComponent } from './cnlist.component';

describe('AjouterconnaissanceComponent', () => {
  let component: CnlistComponent;
  let fixture: ComponentFixture<CnlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
