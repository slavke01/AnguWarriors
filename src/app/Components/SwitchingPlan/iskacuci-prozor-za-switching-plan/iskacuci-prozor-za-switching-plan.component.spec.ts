import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IskacuciProzorZaSwitchingPlanComponent } from './iskacuci-prozor-za-switching-plan.component';

describe('IskacuciProzorZaSwitchingPlanComponent', () => {
  let component: IskacuciProzorZaSwitchingPlanComponent;
  let fixture: ComponentFixture<IskacuciProzorZaSwitchingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IskacuciProzorZaSwitchingPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IskacuciProzorZaSwitchingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
