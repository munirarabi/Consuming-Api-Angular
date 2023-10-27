import { TestBed } from '@angular/core/testing';

import { ServiceSpinner } from './service-spinner';

describe('ServiceSpinnerService', () => {
  let service: ServiceSpinner;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSpinner);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
