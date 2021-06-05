import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewComponentComponent } from './crew-component.component';

describe('CrewComponentComponent', () => {
  let component: CrewComponentComponent;
  let fixture: ComponentFixture<CrewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
