import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankBranchTransaction } from '../bankInterfaces/bank-branch-transaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class BankBranchTransactionService {
  private apiUrl = 'https://your-backend-api-url/api/bank-branch-transactions'; 

  constructor(private http: HttpClient) { }

  getBankBranchTransactions(): Observable<BankBranchTransaction[]> {
    return this.http.get<BankBranchTransaction[]>(this.apiUrl);
  }

  createBankBranchTransaction(bankBranchTransaction: BankBranchTransaction): Observable<BankBranchTransaction> {
    return this.http.post<BankBranchTransaction>(this.apiUrl, bankBranchTransaction);
  }
}
