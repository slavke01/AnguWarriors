import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestCompComponent } from './work-request-comp.component';

describe('WorkRequestCompComponent', () => {
  let component: WorkRequestCompComponent;
  let fixture: ComponentFixture<WorkRequestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkRequestCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
