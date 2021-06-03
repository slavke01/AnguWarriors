import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlanRadaComponent } from './update-plan-rada.component';

describe('UpdatePlanRadaComponent', () => {
  let component: UpdatePlanRadaComponent;
  let fixture: ComponentFixture<UpdatePlanRadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlanRadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlanRadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
