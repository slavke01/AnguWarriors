import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocStartComponent } from './safety-doc-start.component';

describe('SafetyDocStartComponent', () => {
  let component: SafetyDocStartComponent;
  let fixture: ComponentFixture<SafetyDocStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
