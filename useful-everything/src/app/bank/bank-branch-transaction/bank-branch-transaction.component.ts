import { Component, OnInit } from '@angular/core';
import { BankBranchTransaction } from 'src/app/bankInterfaces/bank-branch-transaction.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankBranchTransactionService } from 'src/app/bank_service/bank-branch-transaction.service';
import { BankBranchTransactionsDto } from '../bank-dto/bank-branch-transactions-dto.model';

@Component({
  selector: 'app-bank-branch-transaction',
  templateUrl: './bank-branch-transaction.component.html',
  styleUrls: ['./bank-branch-transaction.component.css']
})
export class BankBranchTransactionComponent implements OnInit {
  bankBranchTransactionList: BankBranchTransaction[] = [];
  newBankBranchTransactionForm!: FormGroup; // Define the form group

  constructor(
    private formBuilder: FormBuilder,
    private bankBranchTransactionService: BankBranchTransactionService
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  bankBranchTransactionDto:BankBranchTransactionsDto={
    transactionDate:new Date(),
    transactioAmount:0,
    transactionType:"",
    
    curr_bal:0,
    empBankDetailsId:0
  }
   accountNumber?: string;
  
  // ngOnInit(): void {
  //   this.initForm();
  //   this.loadBankBranchTransactions();
  // }

  // initForm(): void {
  //   this.newBankBranchTransactionForm = this.formBuilder.group({
  //     transactionDate: ['', Validators.required],
  //     transactioAmount: ['', Validators.required],
  //     transactionType: ['', Validators.required],
  //     curr_bal: ['', Validators.required],
  //     empBankDetails: [null, Validators.required]
  //   });
  // }

  // loadBankBranchTransactions(){
  //   this.bankBranchTransactionService.getBankBranchTransactions(this.accountNumber)
  //     .subscribe((transactions: BankBranchTransaction[]) => {
  //       this.bankBranchTransactionList = transactions;
  //     }, (error) => {
  //       console.error('Error loading bank branch transactions:', error);
  //     });
  // }

  createBankBranchTransaction(): void {
    // if (this.newBankBranchTransactionForm.invalid) {
    //   return;
    // }

    const newTransaction: BankBranchTransaction = this.newBankBranchTransactionForm.value;
    this.bankBranchTransactionService.createBankBranchTransaction(newTransaction)
      .subscribe((newTransaction: BankBranchTransaction) => {
        this.bankBranchTransactionList.push(newTransaction);
        // this.newBankBranchTransactionForm.reset(); 
      }, (error) => {
        console.error('Error creating bank branch transaction:', error);
      });
  }
}


