import { TestBed } from '@angular/core/testing';

import { FinancialFiltersService } from './financial-filters.service';

describe('FinancialFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancialFiltersService = TestBed.get(FinancialFiltersService);
    expect(service).toBeTruthy();
  });
});
