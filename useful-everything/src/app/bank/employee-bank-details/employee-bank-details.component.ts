import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeBankDetails } from 'src/app/bankInterfaces/employee-bank-details.model';
import { EmployeeBankDetailsService } from 'src/app/bank_service/employee-bank-details.service';
import { EmpBankDetailsDto } from '../bank-dto/emp-bank-details-dto.model';
import { BankBranchTransactionsDto } from '../bank-dto/bank-branch-transactions-dto.model';
// import { BankBranchTransaction } from 'src/app/banks_pojo/bank-transactions';
// import { BankBranchDetails } from 'src/app/bankInterfaces/bank-branch-transaction.model';


@Component({
  selector: 'app-employee-bank-details',
  templateUrl: './employee-bank-details.component.html',
  styleUrls: ['./employee-bank-details.component.css']
})
export class EmployeeBankDetailsComponent implements OnInit {
  employeeBankDetailsList: EmployeeBankDetails[] = [];
  // ={
  //   employeeBankDetailsId:0,
	
  //   accountNo:"",
  //   salaryAccount:false,
  //   effDate: new Date(),
    
  //   bankBranchDetails:BankBranchDetails,
  //   branchBankTransaction:BankBranchTransaction[]=[]
  // }
  
  empBankDetailsDto: EmpBankDetailsDto={
    // employeeBankDetailsId:0,
    accountNo:"abc",
    salaryAccount:false,
    effDate:new Date(),
    bankBranchDetailsId:0,
    branchBankTransactionId:0
  };
   
  // bankBranchList: any[] = [];
  
  constructor(
    // private formBuilder: FormBuilder,
    private employeeBankDetailsService: EmployeeBankDetailsService
  ) { }

  ngOnInit(): void {
    // this.initForm();
    this.loadEmployeeBankDetails();
  }

  initForm(): void {
    // this.newEmployeeBankDetailsForm = this.formBuilder.group({
    //   accountNo: ['', Validators.required],
    //   salaryAccount: [false, Validators.required],
    //   effDate: ['', Validators.required],
    //   bankBranchDetails: [null, Validators.required]
    // });
  }
  // console.log(empBankDetailsDto);
  loadEmployeeBankDetails(): void {
    this.employeeBankDetailsService.getEmployeeBankDetails()
      .subscribe((employeeBankDetails: EmployeeBankDetails[]) => {
        this.employeeBankDetailsList = employeeBankDetails;
        console.log(this.employeeBankDetailsList)
        console.log(employeeBankDetails)
      }, (error) => {
        console.error('Error loading employee bank details:', error);
      });
      
    // this.bankBranchList = [
    //   { bankBranchId: 1, country: 'Country 1', city: 'City 1' },
    //   { bankBranchId: 2, country: 'Country 2', city: 'City 2' },
    // ]
    
  }

  createEmployeeBankDetails(): void {
    console.log(this.empBankDetailsDto);
    this.employeeBankDetailsService.createEmployeeBankDetails(this.empBankDetailsDto).subscribe(
      (empData:EmpBankDetailsDto) =>{
        console.log(empData);
        return empData;
      },
      (error)=>{
        console.error('Error creating employee bank details:', error);

      });

    // return null;

    // const EmpBankDetailsDto: empBankDetailsDtoFormValue = this.newEmployeeBankDetailsForm.value;
    // const newEmployeeBankDetails: EmployeeBankDetails = this.newEmployeeBankDetailsForm.value;
    // this.employeeBankDetailsService.createEmployeeBankDetails(this.empBankDetailsDtoFormValue)
    //   .subscribe((newEmployeeBankDetails: EmpBankDetailsDto) => {
    //     this.employeeBankDetailsList.push(newEmployeeBankDetails);
    //     this.newEmployeeBankDetailsForm.reset(); // Reset the form after successful submission
    //   }, (error) => {
    //     console.error('Error creating employee bank details:', error);
    //   });
  }
}
