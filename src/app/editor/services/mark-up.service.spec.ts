import { TestBed } from '@angular/core/testing';

import { MarkUpService } from './mark-up.service';

describe('MarkUpService', () => {
  let service: MarkUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
