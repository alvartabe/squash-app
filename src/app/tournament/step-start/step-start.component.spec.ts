import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepStartComponent } from './step-start.component';

describe('StepStartComponent', () => {
  let component: StepStartComponent;
  let fixture: ComponentFixture<StepStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
