import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidentCompComponent } from './new-incident-comp.component';

describe('NewIncidentCompComponent', () => {
  let component: NewIncidentCompComponent;
  let fixture: ComponentFixture<NewIncidentCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidentCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncidentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
