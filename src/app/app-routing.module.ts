import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthenticationLayoutComponent } from './layout/authentication-layout/authentication-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomerProfileComponent } from './components/customer/customer-profile/customer-profile.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ReportsComponent } from './components/reports/reports.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AgentsComponent } from './components/agents/agents.component';
import { AuthGuard } from './components/auth/guards/auth.guard';

const routes: Routes = [{
  path: '', component: AuthenticationLayoutComponent,
  children: [{
    path: '', component: LoginComponent},
    {path:'', redirectTo:'/login', pathMatch:'full'},
  ]
},
{
  path: '', component: MainLayoutComponent, canActivate: [AuthGuard],
  children: [
    {path:'dashboard', component:DashboardComponent},
    {path:'customers', component:CustomerComponent},
    {path:'products', component:ProductsComponent},
    {path:'customer-profile', component:CustomerProfileComponent},
    {path:'users',component:UserManagementComponent},
    {path:'reports',component:ReportsComponent},
    {path:'users-roles',component:UserRoleComponent},
    {path:'profile',component:ProfileComponent},
    {path:'orders',component:OrdersComponent},
    {path:'agents',component:AgentsComponent}
  ],
},
{ path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
