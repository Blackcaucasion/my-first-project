import { TestBed } from '@angular/core/testing';

import { ManagerGaurd } from './manager.service';

describe('ManagerService', () => {
  let service: ManagerGaurd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerGaurd);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
