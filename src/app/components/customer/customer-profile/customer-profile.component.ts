import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  Customer_Name: string;
  Email:string;
  position: number;
  Contact: string;
  Address: string;
  Nationality: string;
  Date_of_birth: string;
  Status: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Customer_Name: 'John', Email: 'abc@gmail.com', Contact: '03423243242', Address: 'Los Angles', Nationality: 'USA', Date_of_birth: 'H', Status: 'Active'},
	{position: 2, Customer_Name: 'Sara', Email: 'abc@gmail.com', Contact: '03423243242', Address: 'New York', Nationality: 'Germany', Date_of_birth: 'H', Status: 'Active'},
	{position: 3, Customer_Name: 'David', Email: 'abc@gmail.com', Contact: '03423243242', Address: 'Canada', Nationality: 'France', Date_of_birth: 'H', Status: 'Active'},
	{position: 4, Customer_Name: 'Setve Jobs', Email: 'abc@gmail.com', Contact: '03423243242', Address: 'Washinton DC', Nationality: 'UK', Date_of_birth: 'H', Status: 'Active'},
	{position: 5, Customer_Name: 'John Mark', Email: 'abc@gmail.com', Contact: '03423243242', Address: 'California', Nationality: 'Canada', Date_of_birth: 'H', Status: 'Active'},
	{position: 6, Customer_Name: 'Bill Gates', Email: 'abc@gmail.com', Contact: '03423243242', Address: 'New Jersey', Nationality: 'Poland', Date_of_birth: 'H', Status: 'Active'},
	
];


@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  displayedColumns: string[] = ['position', 'Customer_Name', 'Email', 'Contact', 'Address', 'Nationality','Date_of_birth', 'Status','Action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
