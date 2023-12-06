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
    CustomerProfileComponent
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
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
