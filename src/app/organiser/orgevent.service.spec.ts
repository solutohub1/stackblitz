import { TestBed } from '@angular/core/testing';

import { OrgeventService } from './orgevent.service';

describe('OrgeventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgeventService = TestBed.get(OrgeventService);
    expect(service).toBeTruthy();
  });
});
