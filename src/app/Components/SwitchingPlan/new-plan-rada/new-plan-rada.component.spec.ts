import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlanRadaComponent } from './new-plan-rada.component';

describe('NewPlanRadaComponent', () => {
  let component: NewPlanRadaComponent;
  let fixture: ComponentFixture<NewPlanRadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlanRadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlanRadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
