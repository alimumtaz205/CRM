import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/_models/Users';
import { OrderService } from 'src/app/services/orderService/order.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddOrderComponent } from './add-order/add-order.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    dataSource: any;
    selected: number = 1;
    displayedColumns: string[] =
      ['orderNo', 'productType', 'Details', 'company','policyNumber','coverage','insuranceName', 'assignedAgent', 'referalChannel', 'referalId', 'status', 'lastContacted', 'Action'];
  
    clickedRows = new Set<any>();
    @ViewChild(MatSort)
    sort!: MatSort;
    @ViewChild('paginator') paginator!: MatPaginator;
    selection: any;
  
    constructor(
      private service:OrderService,
      public dialogRef: MatDialog,
      private layoutUtilsService: UtilsService,
    ) { }
  
    ngOnInit(): void {
      this.getOrders()
    }
  
    getOrders() {
      debugger
      this.service.GetOrders()
        .subscribe({
          next: (resp) => {
            if (resp.isSuccess) {
              debugger;
              this.dataSource = new MatTableDataSource(resp.data);
              this.dataSource.sort = this.sort;
              this.dataSource.paginator = this.paginator;
            }
            else {
              debugger;
            }
            console.error();
  
          }
        });
    }
  
    addOrder() {
      this.dialogRef.open(AddOrderComponent, {
        width: '40%',
        panelClass: 'custom-modalbox'
      }).afterClosed().subscribe(val=>{
        if(val==='add'){
          //this.getcities(this.lovType);
        }
      })
    }
  
    editUser(user: Users) {
      debugger
      // var width = (window.innerWidth - 80) + 'px';
      // var height = (window.innerHeight - 150) + 'px';
      // console.info(width);
      // console.info(height);
      // const dialogRef = this.dialogRef.open(AddUserComponent, { height: height, width: width, data: { user: user }, disableClose: true });
      // dialogRef.afterClosed().subscribe(res => {
      //   if (!res) {
      //     debugger;
      //     return;
      //   }
  
      //   this.getUsers();
      // });
    }
  
    deleteUser(_item: Users) {
      // const _title = 'User';
      // const _description = 'Are you sure to permanently delete this user?';
      // const _waitDesciption = 'User is deleting...';
  
      // const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
      // dialogRef.afterClosed().subscribe(res => {
      //   if (!res) {
      //     return;
      //   }
      //   debugger;
      //   this.service.deleteUser(_item.userID).pipe(
      //     finalize(() => {
  
      //     })
      //   ).subscribe((baseResponse) => {
      //     debugger;
      //     if (baseResponse) {
      //       this.layoutUtilsService.alertElement("");
      //       this.getUsers();
      //     }
      //     else
      //       this.layoutUtilsService.alertElement("");
      //  });
  
      //});
    }
  
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
  }
  
