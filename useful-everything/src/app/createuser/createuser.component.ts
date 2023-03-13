import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
// implements OnInit
export class CreateuserComponent  {
constructor(private usersService:UsersService, private router:Router){}

 user: Users={
   userId: 0,
   name: '',
   description: '',
   userRole: ''
 };

// ngOnInit():void{

// }
saveEmployee(){
   this.usersService.saveUsers(this.user).subscribe(data=>{
   console.log(data)
   this.toRedirectUSersList();
  },
  error=> console.log("error"));
}
toRedirectUSersList(){
  this.router.navigate(['/users']);
}
onSubmit(){
  this.saveEmployee();
    console.log(this.user)
  }
}

