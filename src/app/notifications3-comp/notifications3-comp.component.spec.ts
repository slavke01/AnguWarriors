import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notifications3CompComponent } from './notifications3-comp.component';

describe('Notifications3CompComponent', () => {
  let component: Notifications3CompComponent;
  let fixture: ComponentFixture<Notifications3CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Notifications3CompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Notifications3CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
