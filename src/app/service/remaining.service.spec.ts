import { TestBed } from '@angular/core/testing';

import { RemainingService } from './remaining.service';

describe('RemainingService', () => {
  let service: RemainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
