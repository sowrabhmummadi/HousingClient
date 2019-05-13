import { TestBed } from '@angular/core/testing';

import { HomeQDataProviderService } from './home-q-data-provider.service';

describe('HomeQDataProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeQDataProviderService = TestBed.get(HomeQDataProviderService);
    expect(service).toBeTruthy();
  });
});
