import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCreateGroupsComponent } from './step-create-groups.component';

describe('StepCreateGroupsComponent', () => {
  let component: StepCreateGroupsComponent;
  let fixture: ComponentFixture<StepCreateGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepCreateGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCreateGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
