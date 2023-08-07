import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeBankDetails } from '../bankInterfaces/employee-bank-details.model';
import { EmpBankDetailsDto } from '../bank/bank-dto/emp-bank-details-dto.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeBankDetailsService {

  private baseUrl = 'http://localhost:8080/empBankDetails'; 

  constructor(private http: HttpClient) { }

  getEmployeeBankDetails(): Observable<EmployeeBankDetails[]> {
    return this.http.get<EmployeeBankDetails[]>('http://localhost:8080/empBankDetails/getAllEmpBankDetails');
  }

  createEmployeeBankDetails(employeeBankDetailsDto: EmpBankDetailsDto): Observable<EmpBankDetailsDto> {
    return this.http.post<EmpBankDetailsDto>('http://localhost:8080/empBankDetails/addEmpBankDetails', employeeBankDetailsDto);
  }
  
  getEmployeeBankDetailsById(id:number): Observable<EmployeeBankDetails> {
    return this.http.get<EmployeeBankDetails>(`http://localhost:8080/empBankDetails/getAllEmpBankDetails/addEmpBankDetails/${id}`);
  }
}
