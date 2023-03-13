import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = "http://localhost:8080/Users/getAllUsers";
  
  constructor(private httpclient: HttpClient) { }

  getAllUsers():Observable<Users[]>{
    return this.httpclient.get<Users[]>('http://localhost:8080/Users/getAllUsers');
  }
  saveUsers(user:Users):Observable<Object>{
    return this.httpclient.post('http://localhost:8080/Users/addUser',user);
  }

  updateUsers(id:number, user:Users):Observable<Users>{
    return this.httpclient.put<Users>(`http://localhost:8080/Users/updateUser/${id}`,user);
  }
  getUserById(id:number):Observable<Users>{
    return this.httpclient.get<Users>(`${this.baseUrl}/${id}`);
  }
  deleteUser(id:number):Observable<Object>{
    return this.httpclient.delete(`http://localhost:8080/Users/deleteUser/${id}`);
  }

}
