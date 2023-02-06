import { TestBed } from '@angular/core/testing';

import { InactiveUserService } from './inactive-user.service';

describe('InactiveUserService', () => {
  let service: InactiveUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InactiveUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
