import { Component } from '@angular/core';
import { Users } from '../users';
import { OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  users: Users[] = [];
  usersList='List shown';



constructor(private userService: UsersService, private routes:Router){}
// idDelete:number=0;
ngOnInit():void{

  this.getAllUsers();
  // this.users=[
  //   {
  //     "userId":1,
  //     "name":"Happy",
  //     "description":"Fell te rise",
  //     "role":"basic"
  //   },
  //   {
  //     "userId":2,
  //     "name":"Happy",
  //     "description":"Fell te rise",
  //     "role":"basic"
  //   }
  // ]
}

  public updateUserEntity(id:number){
    this.routes.navigate(['/updateUser',id]);
    // this.idDelete = id;
  }
  private getAllUsers(){
    this.userService.getAllUsers().subscribe(data=>{
      this.users = data;
    });
  }

  deleteUserEntity(id:number) {
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getAllUsers();
    });
}
}
