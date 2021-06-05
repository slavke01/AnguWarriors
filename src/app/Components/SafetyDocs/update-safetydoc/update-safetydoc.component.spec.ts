import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSafetydocComponent } from './update-safetydoc.component';

describe('UpdateSafetydocComponent', () => {
  let component: UpdateSafetydocComponent;
  let fixture: ComponentFixture<UpdateSafetydocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSafetydocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSafetydocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
