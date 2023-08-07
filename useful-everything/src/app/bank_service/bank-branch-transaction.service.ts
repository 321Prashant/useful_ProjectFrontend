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
  private apiUrl = 'http://localhost:8080/bankTransaction'; 

  constructor(private http: HttpClient) { }

  getBankBranchTransactions(accountNumber:string): Observable<BankBranchTransaction[]> {
    return this.http.get<BankBranchTransaction[]>(`http://localhost:8080/bankTransaction/findLastTenTransactions/${accountNumber}`);
  }

  createBankBranchTransaction(bankBranchTransaction: BankBranchTransaction): Observable<BankBranchTransaction> {
    return this.http.post<BankBranchTransaction>('http://localhost:8080/bankTransaction/makeTransaction', bankBranchTransaction);
  }
}
