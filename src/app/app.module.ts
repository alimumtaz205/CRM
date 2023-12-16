import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthenticationLayoutComponent } from './layout/authentication-layout/authentication-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductsComponent } from './components/products/products.component';
import { MatTableModule } from '@angular/material/table';
import { CustomerProfileComponent } from './components/customer/customer-profile/customer-profile.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ReportsComponent } from './components/reports/reports.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AgentsComponent } from './components/agents/agents.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ToastrModule } from 'ngx-toastr';
import { AddUserComponent } from './components/user-management/add-user/add-user.component';
import { AlertNotificationComponent } from './_models/alert/alert-notification/alert-notification.component';
import { DeleteEntityDialogComponent } from './_models/alert/delete-entity-dialog/delete-entity-dialog.component';
import { AlertDialogComponent } from './_models/alert/alert-dialog/alert-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DashboardComponent,
    LoginComponent,
    AuthenticationLayoutComponent,
    MainLayoutComponent,
    CustomerComponent,
    ProductsComponent,
    CustomerProfileComponent,
    UserManagementComponent,
    ReportsComponent,
    UserRoleComponent,
    ProfileComponent,
    AgentsComponent,
    OrdersComponent,
    AddUserComponent,
    AlertNotificationComponent,
    DeleteEntityDialogComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    NgApexchartsModule,
    ToastrModule.forRoot(),
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
