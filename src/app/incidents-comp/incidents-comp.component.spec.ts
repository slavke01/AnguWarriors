import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsCompComponent } from './incidents-comp.component';

describe('IncidentsCompComponent', () => {
  let component: IncidentsCompComponent;
  let fixture: ComponentFixture<IncidentsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
