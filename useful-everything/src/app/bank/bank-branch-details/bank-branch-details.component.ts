import { Component, OnInit } from '@angular/core';
import { BankBranchDetails } from 'src/app/bankInterfaces/bank-branch-details';
import { BankBranchDetailsService } from 'src/app/bank_service/bank-branch-details.service';
import { BankBranchDetailsDto } from '../bank-dto/bank-branch-details-dto.model';
import { Banks } from 'src/app/banks_pojo/banks';

@Component({
  selector: 'app-bank-branch-details',
  templateUrl: './bank-branch-details.component.html',
  styleUrls: ['./bank-branch-details.component.css']
})

export class BankBranchDetailsComponent {
  bankBranchDetailsListDto: BankBranchDetailsDto[] = [];
  bankBranchDetailsList: BankBranchDetails[] = [];
  constructor(private BankBranchDetailsService: BankBranchDetailsService) { }

  // newBankBranchDetailsForm: any;

 bankBranchDetails:BankBranchDetails={
  bankBranchId:0,
  country:'',
  city:''
 }
 
  ngOnInit(): void {
    this.loadBankBranchDetails();
  }

  loadBankBranchDetails(): void {
    this.BankBranchDetailsService.getBankBranchDetails()
      .subscribe((bankBranchDetails: BankBranchDetails[]) => {
        this.bankBranchDetailsList = bankBranchDetails;
      }, (error) => {
        // console.error('Error loading bank branch details:', error);
      });
  }
  createBankBranchDetails(): void {
    this.BankBranchDetailsService.createBankBranchDetails(this.bankBranchDetails)
      .subscribe((newBankBranchDetails: BankBranchDetails) => {
        console.log(newBankBranchDetails);
        this.bankBranchDetailsList.push(newBankBranchDetails);
      }, (error) => {
        // console.error('Error creating bank branch details:', error);
      });
  }
}


