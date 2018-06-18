import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPlanComponent } from './third-plan.component';

describe('ThirdPlanComponent', () => {
  let component: ThirdPlanComponent;
  let fixture: ComponentFixture<ThirdPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
