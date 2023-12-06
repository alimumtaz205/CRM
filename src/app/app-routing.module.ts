import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthenticationLayoutComponent } from './layout/authentication-layout/authentication-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomerProfileComponent } from './components/customer/customer-profile/customer-profile.component';

const routes: Routes = [{
  path: '', component: AuthenticationLayoutComponent,
  children: [{
    path: '', component: LoginComponent},
    {path:'', redirectTo:'/login', pathMatch:'full'},
  ]
},
{
  path: '', component: MainLayoutComponent,
  children: [
    {path:'dashboard', component:DashboardComponent},
    {path:'customers', component:CustomerComponent},
    {path:'products', component:ProductsComponent},
    {path:'customer-profile', component:CustomerProfileComponent}
  ],
},
{ path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
