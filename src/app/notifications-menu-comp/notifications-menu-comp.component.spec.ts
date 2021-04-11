import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsMenuCompComponent } from './notifications-menu-comp.component';

describe('NotificationsMenuCompComponent', () => {
  let component: NotificationsMenuCompComponent;
  let fixture: ComponentFixture<NotificationsMenuCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsMenuCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsMenuCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
