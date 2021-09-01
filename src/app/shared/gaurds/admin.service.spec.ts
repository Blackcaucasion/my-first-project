import { TestBed } from '@angular/core/testing';

import { AdminGaurd } from './admin.service';

describe('AdminService', () => {
  let service: AdminGaurd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGaurd);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
