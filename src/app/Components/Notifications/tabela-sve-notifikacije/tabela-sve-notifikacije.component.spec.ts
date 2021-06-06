import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaSveNotifikacijeComponent } from './tabela-sve-notifikacije.component';

describe('TabelaSveNotifikacijeComponent', () => {
  let component: TabelaSveNotifikacijeComponent;
  let fixture: ComponentFixture<TabelaSveNotifikacijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaSveNotifikacijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaSveNotifikacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
