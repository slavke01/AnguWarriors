import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCallDialogTableComponent } from './new-call-dialog-table.component';

describe('NewCallDialogTableComponent', () => {
  let component: NewCallDialogTableComponent;
  let fixture: ComponentFixture<NewCallDialogTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCallDialogTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCallDialogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
