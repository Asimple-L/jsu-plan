import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentcontestsComponent } from './recentcontests.component';

describe('RecentcontestsComponent', () => {
  let component: RecentcontestsComponent;
  let fixture: ComponentFixture<RecentcontestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentcontestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentcontestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
