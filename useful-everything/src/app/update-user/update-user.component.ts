import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user:Users={
    userId:0,
    name:"",
    description:"",
    userRole:""
  }

  public constructor(private userService:UsersService, private routes:ActivatedRoute, private httpClient:HttpClient){

  }
  ngOnInit(): void {
     this.getUserDetails();
    
  }

  id: number=this.routes.snapshot.params['id'];
  
  getUserDetails(){
    this.userService.getUserById(this.id).subscribe(data=>{
      this.user= data;
      
 },
 error=> console.error("Can't update it"));
  }

  onSubmit(){
    this.userService.updateUsers(this.id,this.user).subscribe(data=>{
      
    });
    console.log("User  updated"+"users"+this.user);
}
}
