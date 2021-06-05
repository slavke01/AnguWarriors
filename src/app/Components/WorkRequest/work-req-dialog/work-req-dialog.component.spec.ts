import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkReqDialogComponent } from './work-req-dialog.component';

describe('WorkReqDialogComponent', () => {
  let component: WorkReqDialogComponent;
  let fixture: ComponentFixture<WorkReqDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkReqDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkReqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
