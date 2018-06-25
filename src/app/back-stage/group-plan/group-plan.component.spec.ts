import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPlanComponent } from './group-plan.component';

describe('GroupPlanComponent', () => {
  let component: GroupPlanComponent;
  let fixture: ComponentFixture<GroupPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
