import { TestBed, inject } from '@angular/core/testing';

import { RecentService } from './recent.service';

describe('RecentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecentService]
    });
  });

  it('should be created', inject([RecentService], (service: RecentService) => {
    expect(service).toBeTruthy();
  }));
});
