import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetydocdialogComponent } from './safetydocdialog.component';

describe('SafetydocdialogComponent', () => {
  let component: SafetydocdialogComponent;
  let fixture: ComponentFixture<SafetydocdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetydocdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetydocdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
