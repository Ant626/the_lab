import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLogicComponent } from './test-logic.component';

describe('TestLogicComponent', () => {
  let component: TestLogicComponent;
  let fixture: ComponentFixture<TestLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLogicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
