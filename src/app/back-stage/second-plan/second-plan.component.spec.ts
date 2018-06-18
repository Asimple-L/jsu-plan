import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPlanComponent } from './second-plan.component';

describe('SecondPlanComponent', () => {
  let component: SecondPlanComponent;
  let fixture: ComponentFixture<SecondPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
