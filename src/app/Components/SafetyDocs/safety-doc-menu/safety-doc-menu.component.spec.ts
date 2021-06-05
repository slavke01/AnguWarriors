import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocMenuComponent } from './safety-doc-menu.component';

describe('SafetyDocMenuComponent', () => {
  let component: SafetyDocMenuComponent;
  let fixture: ComponentFixture<SafetyDocMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
