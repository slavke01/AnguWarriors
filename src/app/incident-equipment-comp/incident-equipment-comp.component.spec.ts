import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentEquipmentCompComponent } from './incident-equipment-comp.component';

describe('IncidentEquipmentCompComponent', () => {
  let component: IncidentEquipmentCompComponent;
  let fixture: ComponentFixture<IncidentEquipmentCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentEquipmentCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentEquipmentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
