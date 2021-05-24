import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateChangesHistoryRequestComponent } from './state-changes-history-request.component';

describe('StateChangesHistoryRequestComponent', () => {
  let component: StateChangesHistoryRequestComponent;
  let fixture: ComponentFixture<StateChangesHistoryRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateChangesHistoryRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateChangesHistoryRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
