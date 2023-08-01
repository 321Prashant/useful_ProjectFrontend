import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from 'src/charts/charts.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { BankBranchDetailsComponent } from './bank/bank-branch-details/bank-branch-details.component';
import { EmployeeBankDetailsComponent } from './bank/employee-bank-details/employee-bank-details.component';
import { BankBranchTransactionComponent } from './bank/bank-branch-transaction/bank-branch-transaction.component';

const routes: Routes = [
  {path:'users',component:UsersListComponent},
  {path:'createUser',component:CreateuserComponent},
  {path:'updateUser/:id',component:UpdateUserComponent},
  // {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'barChart',component:ChartsComponent},
  { path: 'bank-branches', component: BankBranchDetailsComponent },
  { path: 'employee-bank-details', component: EmployeeBankDetailsComponent },
  { path: 'bank-branch-transactions', component: BankBranchTransactionComponent },
  { path: '', redirectTo: '/bank-branches', pathMatch: 'full' }, // Redirect to /bank-branches by default
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
