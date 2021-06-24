import { TestBed } from '@angular/core/testing';

import { ProductionViewService } from './production-view.service';

describe('ProductionViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductionViewService = TestBed.get(ProductionViewService);
    expect(service).toBeTruthy();
  });
});
