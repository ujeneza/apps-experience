import { TestBed } from '@angular/core/testing';

import { MetalMovementService } from './metal-movement.service';

describe('MetalMovementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetalMovementService = TestBed.get(MetalMovementService);
    expect(service).toBeTruthy();
  });
});
