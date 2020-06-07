import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoRelationComponent } from './eco-relation.component';

describe('EcoRelationComponent', () => {
  let component: EcoRelationComponent;
  let fixture: ComponentFixture<EcoRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
