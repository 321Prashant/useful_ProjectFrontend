import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankBranchDetails } from '../bankInterfaces/bank-branch-details';
import { BankBranchDetailsDto } from '../bank/bank-dto/bank-branch-details-dto.model';


@Injectable({
  providedIn: 'root'
})
export class BankBranchDetailsService {
  private baseUrl = 'http://localhost:8080/bankDetials'; 

  constructor(private http: HttpClient) { }

  getBankBranchDetails(): Observable<BankBranchDetails[]> {
    return this.http.get<BankBranchDetails[]>('http://localhost:8080/bankDetials/getBankDetails');
  }

  createBankBranchDetails(bankBranchDetails: BankBranchDetails): Observable<BankBranchDetails> {
    return this.http.post<BankBranchDetails>('http://localhost:8080/bankDetials/addBankDetails', bankBranchDetails);
  }
}
