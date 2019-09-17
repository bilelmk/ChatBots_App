import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerchatbotComponent } from './supprimerchatbot.component';

describe('SupprimerconnaissanceComponent', () => {
  let component: SupprimerchatbotComponent;
  let fixture: ComponentFixture<SupprimerchatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerchatbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerchatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
