import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { EmployeeBankDetailsComponent } from './bank/employee-bank-details/employee-bank-details.component';
import { BankBranchTransactionComponent } from './bank/bank-branch-transaction/bank-branch-transaction.component';
import { BankBranchDetailsComponent } from './bank/bank-branch-details/bank-branch-details.component';
// import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    CreateuserComponent,
    UpdateUserComponent,
    EmployeeBankDetailsComponent,
    BankBranchTransactionComponent,
    BankBranchDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    NgChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forChild([{ path: '', component: YourPagePage }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
