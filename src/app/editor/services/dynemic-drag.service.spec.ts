import { TestBed } from '@angular/core/testing';

import { DynemicDragService } from './dynemic-drag.service';

describe('DynemicDragService', () => {
  let service: DynemicDragService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynemicDragService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
