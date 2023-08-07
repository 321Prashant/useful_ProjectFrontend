import { BankBranchDetails } from './bank-branch-details';
import { BankBranchTransaction } from './bank-branch-transaction.model';

export interface EmployeeBankDetails {
  employeeBankDetailsId: number;
  accountNo: string;
  salaryAccount: boolean;
  effDate: Date;
  bankBranchDetails: BankBranchDetails;
  branchBankTransaction: BankBranchTransaction[];
}

//try not to use JSONBACKREFERENCE field in frontend 
// JSONBACKREFERNCE where response is not needed