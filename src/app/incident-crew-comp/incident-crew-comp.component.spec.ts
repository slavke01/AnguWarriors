import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentCrewCompComponent } from './incident-crew-comp.component';

describe('IncidentCrewCompComponent', () => {
  let component: IncidentCrewCompComponent;
  let fixture: ComponentFixture<IncidentCrewCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentCrewCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentCrewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
