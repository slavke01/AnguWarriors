import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTabelaNotificationsComponent } from './error-tabela-notifications.component';

describe('ErrorTabelaNotificationsComponent', () => {
  let component: ErrorTabelaNotificationsComponent;
  let fixture: ComponentFixture<ErrorTabelaNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorTabelaNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTabelaNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
