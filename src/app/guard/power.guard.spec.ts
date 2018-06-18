import { TestBed, async, inject } from '@angular/core/testing';

import { PowerGuard } from './power.guard';

describe('PowerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerGuard]
    });
  });

  it('should ...', inject([PowerGuard], (guard: PowerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
