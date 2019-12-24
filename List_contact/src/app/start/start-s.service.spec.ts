import { TestBed } from '@angular/core/testing';

import { StartSService } from './start-s.service';

describe('StartSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartSService = TestBed.get(StartSService);
    expect(service).toBeTruthy();
  });
});
