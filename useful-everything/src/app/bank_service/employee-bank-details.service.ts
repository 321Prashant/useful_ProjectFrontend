import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeBankDetails } from '../bankInterfaces/employee-bank-details.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeBankDetailsService {

  private apiUrl = 'https://your-backend-api-url/api/employee-bank-details'; 

  constructor(private http: HttpClient) { }

  getEmployeeBankDetails(): Observable<EmployeeBankDetails[]> {
    return this.http.get<EmployeeBankDetails[]>(this.apiUrl);
  }

  createEmployeeBankDetails(employeeBankDetails: EmployeeBankDetails): Observable<EmployeeBankDetails> {
    return this.http.post<EmployeeBankDetails>(this.apiUrl, employeeBankDetails);
  }
}
