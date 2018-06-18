import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackUserComponent } from './back-user.component';

describe('BackUserComponent', () => {
  let component: BackUserComponent;
  let fixture: ComponentFixture<BackUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
