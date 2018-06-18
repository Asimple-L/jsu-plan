import { TestBed, async, inject } from '@angular/core/testing';

import { AdminUserLoginGuard } from './admin-user-login.guard';

describe('AdminUserLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminUserLoginGuard]
    });
  });

  it('should ...', inject([AdminUserLoginGuard], (guard: AdminUserLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
