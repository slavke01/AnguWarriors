import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDevicesCompComponent } from './new-devices-comp.component';

describe('NewDevicesCompComponent', () => {
  let component: NewDevicesCompComponent;
  let fixture: ComponentFixture<NewDevicesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDevicesCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDevicesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
