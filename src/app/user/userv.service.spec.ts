import { TestBed } from '@angular/core/testing';

import { UservService } from './userv.service';

describe('UservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UservService = TestBed.get(UservService);
    expect(service).toBeTruthy();
  });
});
