import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocBasicInfoComponent } from './safety-doc-basic-info.component';

describe('SafetyDocBasicInfoComponent', () => {
  let component: SafetyDocBasicInfoComponent;
  let fixture: ComponentFixture<SafetyDocBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
