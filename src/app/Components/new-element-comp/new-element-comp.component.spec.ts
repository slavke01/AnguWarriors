import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewElementCompComponent } from './new-element-comp.component';

describe('NewElementCompComponent', () => {
  let component: NewElementCompComponent;
  let fixture: ComponentFixture<NewElementCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewElementCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewElementCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
