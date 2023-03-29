import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
// import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    CreateuserComponent,
    UpdateUserComponent
  ],
  imports: [
    
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
