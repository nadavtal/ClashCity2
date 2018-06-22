import { TestBed, inject } from '@angular/core/testing';

import { UNITSService } from './units.service';

describe('UNITSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UNITSService]
    });
  });

  it('should be created', inject([UNITSService], (service: UNITSService) => {
    expect(service).toBeTruthy();
  }));
});
