import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentMultimediaCompComponent } from './incident-multimedia-comp.component';

describe('IncidentMultimediaCompComponent', () => {
  let component: IncidentMultimediaCompComponent;
  let fixture: ComponentFixture<IncidentMultimediaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentMultimediaCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentMultimediaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
