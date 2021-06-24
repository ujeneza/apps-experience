import { TestBed } from '@angular/core/testing';

import { MetalMvtService } from './metal-mvt.service';

describe('MetalMvtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetalMvtService = TestBed.get(MetalMvtService);
    expect(service).toBeTruthy();
  });
});
