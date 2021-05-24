import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentCallsCompComponent } from './incident-calls-comp.component';

describe('IncidentCallsCompComponent', () => {
  let component: IncidentCallsCompComponent;
  let fixture: ComponentFixture<IncidentCallsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentCallsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentCallsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
