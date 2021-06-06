import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesTabelaNotificationsComponent } from './succes-tabela-notifications.component';

describe('SuccesTabelaNotificationsComponent', () => {
  let component: SuccesTabelaNotificationsComponent;
  let fixture: ComponentFixture<SuccesTabelaNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesTabelaNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesTabelaNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
