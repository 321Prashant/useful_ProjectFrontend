import { EmpBankDetails } from "../banks_pojo/emp-bank-details";

export interface BankBranchTransaction {
    bankTransactionId: number;
	transactionDate: Date;
	transactioAmount: number;
	transactionType: string;
	curr_bal: number;
    // empBankDetails: EmpBankDetails;
  }