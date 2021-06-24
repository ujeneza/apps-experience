import { TestBed } from '@angular/core/testing';

import { ActivityViewService } from './activity-view.service';

describe('ActivityViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityViewService = TestBed.get(ActivityViewService);
    expect(service).toBeTruthy();
  });
});
