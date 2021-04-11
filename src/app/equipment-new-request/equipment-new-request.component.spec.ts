import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentNewRequestComponent } from './equipment-new-request.component';

describe('EquipmentNewRequestComponent', () => {
  let component: EquipmentNewRequestComponent;
  let fixture: ComponentFixture<EquipmentNewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentNewRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentNewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
