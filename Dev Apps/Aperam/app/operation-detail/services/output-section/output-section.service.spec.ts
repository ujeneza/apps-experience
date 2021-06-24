import { TestBed } from '@angular/core/testing';

import { OutputSectionService } from './output-section.service';

describe('OutputSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutputSectionService = TestBed.get(OutputSectionService);
    expect(service).toBeTruthy();
  });
});
