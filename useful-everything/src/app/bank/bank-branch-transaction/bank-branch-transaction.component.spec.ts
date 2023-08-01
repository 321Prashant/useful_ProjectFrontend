import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankBranchTransactionComponent } from './bank-branch-transaction.component';

describe('BankBranchTransactionComponent', () => {
  let component: BankBranchTransactionComponent;
  let fixture: ComponentFixture<BankBranchTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankBranchTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankBranchTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
