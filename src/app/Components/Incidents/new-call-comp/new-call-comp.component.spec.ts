import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCallCompComponent } from './new-call-comp.component';

describe('NewCallCompComponent', () => {
  let component: NewCallCompComponent;
  let fixture: ComponentFixture<NewCallCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCallCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCallCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
