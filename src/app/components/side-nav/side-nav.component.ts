import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus:boolean=true;
  listAdmin:any[];
  listSupervisor:any[];
  listAgents:any[];
  listCustomers:any[];
  listMenu:any[];
  
constructor(
  private router: Router,
){}

  ngOnInit(): void {

    var role = localStorage.getItem("UserRole");
    this.listAdmin=[
      {
        number:'12',
        name:'Profile',
        url:'profile',
        icon:'fa-solid fa-user',
      },
      {
        number:'1',
        name:'Customers',
        url:'customers',
        icon:'fa-solid fa-users',
        
      },
      {
        number:'2',
        name:'Products',
        url:'products',
        icon:'fa-brands fa-bitbucket',
      },
      {
        number:'3',
        name:'Orders',
        url:'orders',
        icon:'fa-solid fa-shopping-cart',
      },
      {
        number:'4',
        name:'Reports',
        url:'reports',
        icon:'fa-solid fa-file-text',
      },
      {
        number:'8',
        name:'User Management',
        url:'users',
        icon:'fa-solid fa-users',
      },
      {
        number:'9',
        name:'User Roles',
        url:'users-roles',
        icon:'fa-solid fa-users',
      },
      {
        number:'7',
        name:'Settings',
        url:'customers',
        icon:'fa-solid fa fa-gear',
      }
    ]
  
    this.listSupervisor=[
      {
        number:'1',
        name:'Profile',
        url:'profile',
        icon:'fa-solid fa-user',
      },
      {
        number:'2',
        name:'Agents',
        url:'agents',
        icon:'fa-solid fa-male',
      },      
      {
        number:'3',
        name:'Orders',
        url:'orders',
        icon:'fa-solid fa-shopping-cart',
      },
      {
        number:'4',
        name:'Reports',
        url:'reports',
        icon:'fa-solid fa-file-text',
      }
    ]
  
    this.listAgents=[
      {
        number:'12',
        name:'Profile',
        url:'profile',
        icon:'fa-solid fa-user',
      },
      {
        number:'1',
        name:'Customers',
        url:'customers',
        icon:'fa-solid fa-users',
        
      },
      {
        number:'2',
        name:'Products',
        url:'products',
        icon:'fa-brands fa-bitbucket',
      },
      {
        number:'3',
        name:'Orders',
        url:'orders',
        icon:'fa-solid fa-shopping-cart',
      }
    ]
  
    this.listCustomers=[
      {
        number:'12',
        name:'Profile',
        url:'profile',
        icon:'fa-solid fa-user',
      },
      {
        number:'2',
        name:'Products',
        url:'products',
        icon:'fa-brands fa-bitbucket',
      },
      {
        number:'3',
        name:'Orders',
        url:'orders',
        icon:'fa-solid fa-shopping-cart',
      }
    ]

    if(role=="1"){
      this.listMenu = this.listAdmin;
    }
    if(role=="2"){
      this.listMenu = this.listSupervisor;
    }
    if(role=="3"){
      this.listMenu = this.listAgents;
    }
    if(role=="4"){
      this.listMenu = this.listCustomers;
    }
  }
  
  signOut(){
    localStorage.removeItem("token")
    this.router.navigate(['/']);
  }
}
