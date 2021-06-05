import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCrewComponentComponent } from './new-crew-component.component';

describe('NewCrewComponentComponent', () => {
  let component: NewCrewComponentComponent;
  let fixture: ComponentFixture<NewCrewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCrewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCrewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
