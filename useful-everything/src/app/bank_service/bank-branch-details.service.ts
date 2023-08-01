import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankBranchDetails } from '../bankInterfaces/bank-branch-details.model';


@Injectable({
  providedIn: 'root'
})
export class BankBranchDetailsService {
  private apiUrl = 'https://localhost:8080/bankDetials/getBankDetails'; 

  constructor(private http: HttpClient) { }

  getBankBranchDetails(): Observable<BankBranchDetails[]> {
    return this.http.get<BankBranchDetails[]>(this.apiUrl);
  }

  createBankBranchDetails(bankBranchDetails: BankBranchDetails): Observable<BankBranchDetails> {
    return this.http.post<BankBranchDetails>(this.apiUrl+'/addBankDetails', bankBranchDetails);
  }
}