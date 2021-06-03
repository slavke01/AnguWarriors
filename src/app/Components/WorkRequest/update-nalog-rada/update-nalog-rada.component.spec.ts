import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNalogRadaComponent } from './update-nalog-rada.component';

describe('UpdateNalogRadaComponent', () => {
  let component: UpdateNalogRadaComponent;
  let fixture: ComponentFixture<UpdateNalogRadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNalogRadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNalogRadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
