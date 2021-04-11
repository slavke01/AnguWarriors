import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInformationWorkRequestComponent } from './basic-information-work-request.component';

describe('BasicInformationWorkRequestComponent', () => {
  let component: BasicInformationWorkRequestComponent;
  let fixture: ComponentFixture<BasicInformationWorkRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInformationWorkRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInformationWorkRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
