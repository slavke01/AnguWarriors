import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentResolutionCompComponent } from './incident-resolution-comp.component';

describe('IncidentResolutionCompComponent', () => {
  let component: IncidentResolutionCompComponent;
  let fixture: ComponentFixture<IncidentResolutionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentResolutionCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentResolutionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
