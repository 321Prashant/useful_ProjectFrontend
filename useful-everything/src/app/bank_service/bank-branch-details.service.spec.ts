import { TestBed } from '@angular/core/testing';

import { BankBranchDetailsService } from './bank-branch-details.service';

describe('BankBranchDetailsService', () => {
  let service: BankBranchDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankBranchDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
