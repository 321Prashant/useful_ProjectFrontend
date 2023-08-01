import { BankBranchDetails } from './bank-branch-details.model';
import { BankBranchTransaction } from './bank-branch-transaction.model';

export interface EmployeeBankDetails {
  employeeBankDetailsId?: number;
  accountNo: string;
  salaryAccount: boolean;
  effDate: Date;
  bankBranchDetails: BankBranchDetails;
  branchBankTransaction: BankBranchTransaction[];
}