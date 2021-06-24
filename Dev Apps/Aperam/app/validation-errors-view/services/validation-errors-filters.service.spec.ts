import { TestBed } from '@angular/core/testing';

import { ValidationErrorsFiltersService } from './validation-errors-filters.service';

describe('ValidationErrorsFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationErrorsFiltersService = TestBed.get(ValidationErrorsFiltersService);
    expect(service).toBeTruthy();
  });
});
