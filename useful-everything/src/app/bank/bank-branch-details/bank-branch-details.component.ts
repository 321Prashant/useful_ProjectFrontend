import { Component, OnInit } from '@angular/core';
import { BankBranchDetails } from 'src/app/bankInterfaces/bank-branch-details.model';
import { BankBranchDetailsService } from 'src/app/bank_service/bank-branch-details.service';

@Component({
  selector: 'app-bank-branch-details',
  templateUrl: './bank-branch-details.component.html',
  styleUrls: ['./bank-branch-details.component.css']
})

export class BankBranchDetailsComponent implements OnInit {
  bankBranchDetailsList: BankBranchDetails[] = [];
newBankBranchDetailsForm: any;

  constructor(private bankBranchDetailsService: BankBranchDetailsService) { }

  ngOnInit(): void {
    this.loadBankBranchDetails();
  }

  loadBankBranchDetails(): void {
    this.bankBranchDetailsService.getBankBranchDetails()
      .subscribe((bankBranchDetails: BankBranchDetails[]) => {
        this.bankBranchDetailsList = bankBranchDetails;
      }, (error) => {
        console.error('Error loading bank branch details:', error);
      });
  }
  createBankBranchDetails(bankBranchDetails: BankBranchDetails): void {
    this.bankBranchDetailsService.createBankBranchDetails(bankBranchDetails)
      .subscribe((newBankBranchDetails: BankBranchDetails) => {
        this.bankBranchDetailsList.push(newBankBranchDetails);
      }, (error) => {
        console.error('Error creating bank branch details:', error);
      });
  }
  

}
