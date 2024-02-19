import { TestBed } from '@angular/core/testing';

import { DragListService } from './drag-list.service';

describe('DragListService', () => {
  let service: DragListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
