import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotlearnComponent } from './chatbotlearn.component';

describe('AjouterconnaissanceComponent', () => {
  let component: ChatbotlearnComponent;
  let fixture: ComponentFixture<ChatbotlearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotlearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotlearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
