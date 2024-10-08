import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeDataComponent } from './fake-data.component';

describe('FakeDataComponent', () => {
  let component: FakeDataComponent;
  let fixture: ComponentFixture<FakeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FakeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
