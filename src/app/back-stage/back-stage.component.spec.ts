import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackStageComponent } from './back-stage.component';

describe('BackStageComponent', () => {
  let component: BackStageComponent;
  let fixture: ComponentFixture<BackStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
