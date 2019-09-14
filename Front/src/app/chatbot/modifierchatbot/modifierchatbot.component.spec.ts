import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierchatbotComponent } from './modifierchatbot.component';

describe('ModifierchatbotComponent', () => {
  let component: ModifierchatbotComponent;
  let fixture: ComponentFixture<ModifierchatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierchatbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierchatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
