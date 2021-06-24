import { TestBed } from '@angular/core/testing';

import { InputSectionService } from './input-section.service';

describe('InputSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputSectionService = TestBed.get(InputSectionService);
    expect(service).toBeTruthy();
  });
});
