import { TestBed } from '@angular/core/testing';

import { MetalUnitService } from './metal-unit.service';

describe('MetalUnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetalUnitService = TestBed.get(MetalUnitService);
    expect(service).toBeTruthy();
  });
});
