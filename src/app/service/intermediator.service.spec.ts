import { TestBed, inject } from '@angular/core/testing';

import { IntermediatorService } from './intermediator.service';

describe('IntermediatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntermediatorService]
    });
  });

  it('should be created', inject([IntermediatorService], (service: IntermediatorService) => {
    expect(service).toBeTruthy();
  }));
});
