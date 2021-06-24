import { TestBed } from '@angular/core/testing';

import { ConsumptionViewService } from './consumption-view.service';

describe('ConsumptionViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumptionViewService = TestBed.get(ConsumptionViewService);
    expect(service).toBeTruthy();
  });
});
