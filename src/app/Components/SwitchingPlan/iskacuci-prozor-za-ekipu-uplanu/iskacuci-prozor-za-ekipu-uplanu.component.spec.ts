import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IskacuciProzorZaEkipuUPlanuComponent } from './iskacuci-prozor-za-ekipu-uplanu.component';

describe('IskacuciProzorZaEkipuUPlanuComponent', () => {
  let component: IskacuciProzorZaEkipuUPlanuComponent;
  let fixture: ComponentFixture<IskacuciProzorZaEkipuUPlanuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IskacuciProzorZaEkipuUPlanuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IskacuciProzorZaEkipuUPlanuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
