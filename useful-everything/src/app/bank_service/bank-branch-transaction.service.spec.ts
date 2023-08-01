import { TestBed } from '@angular/core/testing';

import { BankBranchTransactionService } from './bank-branch-transaction.service';

describe('BankBranchTransactionService', () => {
  let service: BankBranchTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankBranchTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
