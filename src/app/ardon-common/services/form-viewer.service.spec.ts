import { TestBed } from '@angular/core/testing';

import { FormViewerService } from './form-viewer.service';

describe('FormViewerService', () => {
  let service: FormViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
