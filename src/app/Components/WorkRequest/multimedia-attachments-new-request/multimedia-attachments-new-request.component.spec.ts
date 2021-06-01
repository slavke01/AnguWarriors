import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaAttachmentsNewRequestComponent } from './multimedia-attachments-new-request.component';

describe('MultimediaAttachmentsNewRequestComponent', () => {
  let component: MultimediaAttachmentsNewRequestComponent;
  let fixture: ComponentFixture<MultimediaAttachmentsNewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaAttachmentsNewRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaAttachmentsNewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
