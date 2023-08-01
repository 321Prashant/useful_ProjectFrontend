import { Banks } from "./banks";

export interface EmpBankDetails {
    employeeBankDetailsId:number;
	
	accountNo:string;
	empId:number;
	salaryAccount:boolean;
	effDate: Date;
	
	bankBranchDetails:Banks;
}
