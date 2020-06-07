import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forecast1Component } from './forecast1.component';

describe('Forecast1Component', () => {
  let component: Forecast1Component;
  let fixture: ComponentFixture<Forecast1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forecast1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forecast1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
