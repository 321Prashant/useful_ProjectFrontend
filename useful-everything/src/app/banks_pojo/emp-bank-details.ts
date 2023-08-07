import { BankTransactions } from "./bank-transactions";
import { Banks } from "./banks";

export interface EmpBankDetails {
    employeeBankDetailsId:number;
	
	accountNo:string;
	
	salaryAccount:boolean;
	effDate: Date;
	
	bankBranchDetails:Banks;
    branchBankTransaction:BankTransactions[];
}
