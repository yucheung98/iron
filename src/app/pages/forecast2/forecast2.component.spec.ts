import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forecast2Component } from './forecast2.component';

describe('Forecast2Component', () => {
  let component: Forecast2Component;
  let fixture: ComponentFixture<Forecast2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forecast2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forecast2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
