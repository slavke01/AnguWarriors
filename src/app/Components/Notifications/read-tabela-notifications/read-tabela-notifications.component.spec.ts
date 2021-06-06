import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTabelaNotificationsComponent } from './read-tabela-notifications.component';

describe('ReadTabelaNotificationsComponent', () => {
  let component: ReadTabelaNotificationsComponent;
  let fixture: ComponentFixture<ReadTabelaNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadTabelaNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadTabelaNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
