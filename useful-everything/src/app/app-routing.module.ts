import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from 'src/charts/charts.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'users',component:UsersListComponent},
  {path:'createUser',component:CreateuserComponent},
  {path:'updateUser/:id',component:UpdateUserComponent},
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'barChart',component:ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
