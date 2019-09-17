import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterchatbotComponent } from './ajouterchatbot.component';

describe('AjouterconnaissanceComponent', () => {
  let component: AjouterchatbotComponent;
  let fixture: ComponentFixture<AjouterchatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterchatbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterchatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
