import { TestBed, inject } from '@angular/core/testing';

import { PlansViewService } from './plans-view.service';

describe('PlansViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlansViewService]
    });
  });

  it('should be created', inject([PlansViewService], (service: PlansViewService) => {
    expect(service).toBeTruthy();
  }));
});
