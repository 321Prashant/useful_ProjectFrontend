import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeBankDetails } from 'src/app/bankInterfaces/employee-bank-details.model';
import { EmployeeBankDetailsService } from 'src/app/bank_service/employee-bank-details.service';

@Component({
  selector: 'app-employee-bank-details',
  templateUrl: './employee-bank-details.component.html',
  styleUrls: ['./employee-bank-details.component.css']
})
export class EmployeeBankDetailsComponent implements OnInit {
  employeeBankDetailsList: EmployeeBankDetails[] = [];
  newEmployeeBankDetailsForm!: FormGroup; 
  bankBranchList: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private employeeBankDetailsService: EmployeeBankDetailsService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadEmployeeBankDetails();
  }

  initForm(): void {
    this.newEmployeeBankDetailsForm = this.formBuilder.group({
      accountNo: ['', Validators.required],
      salaryAccount: [false, Validators.required],
      effDate: ['', Validators.required],
      bankBranchDetails: [null, Validators.required]
    });
  }

  loadEmployeeBankDetails(): void {
    // this.employeeBankDetailsService.getEmployeeBankDetails()
    //   .subscribe((employeeBankDetails: EmployeeBankDetails[]) => {
    //     this.employeeBankDetailsList = employeeBankDetails;
    //   }, (error) => {
    //     console.error('Error loading employee bank details:', error);
    //   });
    this.bankBranchList = [
      { bankBranchId: 1, country: 'Country 1', city: 'City 1' },
      { bankBranchId: 2, country: 'Country 2', city: 'City 2' },
    ]
  }

  createEmployeeBankDetails(): void {
    if (this.newEmployeeBankDetailsForm.invalid) {
      return;
    }

    const newEmployeeBankDetails: EmployeeBankDetails = this.newEmployeeBankDetailsForm.value;
    this.employeeBankDetailsService.createEmployeeBankDetails(newEmployeeBankDetails)
      .subscribe((newEmployeeBankDetails: EmployeeBankDetails) => {
        this.employeeBankDetailsList.push(newEmployeeBankDetails);
        this.newEmployeeBankDetailsForm.reset(); // Reset the form after successful submission
      }, (error) => {
        console.error('Error creating employee bank details:', error);
      });
  }
}
