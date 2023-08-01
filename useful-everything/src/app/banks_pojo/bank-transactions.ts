import { EmpBankDetails } from "./emp-bank-details";

export interface BankTransactions {
    bankTransactionId:number;
	transactionDate: Date;
	transactioAmount: number;
	transactionType: string;
	
	curr_bal: number;
    empBankDetails:EmpBankDetails;
}
