import { TestBed } from '@angular/core/testing';

import { ServiceApi } from './service-api.service';

describe('ServiceApiService', () => {
  let service: ServiceApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
