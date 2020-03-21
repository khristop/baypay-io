import { TestBed } from '@angular/core/testing';

import { BaypayService } from './baypay.service';

describe('BaypayService', () => {
  let service: BaypayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaypayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
