import { TestBed } from '@angular/core/testing';

import { CamServiceService } from './cam-service.service';

describe('CamServiceService', () => {
  let service: CamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
