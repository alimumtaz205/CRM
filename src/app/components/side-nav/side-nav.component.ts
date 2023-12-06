import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus:boolean=true;
    
  list=[
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
      name:'Sales',
      url:'customers',
      icon:'fa-solid fa-shopping-cart',
    },
    {
      number:'4',
      name:'Reports',
      url:'customers',
      icon:'fa-solid fa-file-text',
    },
    {
      number:'5',
      name:'Users',
      url:'customers',
      icon:'fa-solid fa-user-circle',
    },
    {
      number:'6',
      name:'Documents',
      url:'customers',
      icon:'fa-solid fa-file-text',
    },
    {
      number:'7',
      name:'Settings',
      url:'customers',
      icon:'fa-solid fa fa-gear',
    }
  ]

  ngOnInit(): void {
  }
}
