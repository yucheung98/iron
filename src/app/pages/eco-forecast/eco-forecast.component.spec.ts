import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoForecastComponent } from './eco-forecast.component';

describe('EcoForecastComponent', () => {
  let component: EcoForecastComponent;
  let fixture: ComponentFixture<EcoForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
