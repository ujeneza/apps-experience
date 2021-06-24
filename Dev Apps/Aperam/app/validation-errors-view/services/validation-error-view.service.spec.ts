import { TestBed } from '@angular/core/testing';

import { ValidationErrorViewService } from './validation-error-view.service';

describe('ValidationErrorViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationErrorViewService = TestBed.get(ValidationErrorViewService);
    expect(service).toBeTruthy();
  });
});
