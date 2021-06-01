import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPlanRadaComponent } from './basic-plan-rada.component';

describe('BasicPlanRadaComponent', () => {
  let component: BasicPlanRadaComponent;
  let fixture: ComponentFixture<BasicPlanRadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPlanRadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPlanRadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
