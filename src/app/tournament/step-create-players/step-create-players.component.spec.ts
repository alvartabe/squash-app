import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCreatePlayersComponent } from './step-create-players.component';

describe('StepCreatePlayersComponent', () => {
  let component: StepCreatePlayersComponent;
  let fixture: ComponentFixture<StepCreatePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepCreatePlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCreatePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
