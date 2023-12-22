import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/_models/Users';
import { UserService } from 'src/app/services/userService/user.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUserComponent } from '../user-management/add-user/add-user.component';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
    dataSource: any;
    selected: number = 1;
    userList:[]=[];
    displayedColumns: string[] =
      ['userID', 'userType', 'userStatus', 'Action'];
  
    clickedRows = new Set<any>();
    @ViewChild(MatSort)
    sort!: MatSort;
    @ViewChild('paginator') paginator!: MatPaginator;
    selection: any;
  
    constructor(
      private service: UserService,
      public dialogRef: MatDialog,
      private layoutUtilsService: UtilsService,
    ) { }
  
    ngOnInit(): void {
      this.getUsers()
      this.userList
    }
  
    getUsers() {
      this.service.GetUserRoles()
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
  
    addUser() {
      const newUser = new Users();
      this.editUser(newUser);
    }
  
    editUser(user: Users) {
      debugger
      var width = (window.innerWidth - 80) + 'px';
      var height = (window.innerHeight - 150) + 'px';
      console.info(width);
      console.info(height);
      const dialogRef = this.dialogRef.open(AddUserComponent, { height: height, width: width, data: { user: user }, disableClose: true });
      dialogRef.afterClosed().subscribe(res => {
        if (!res) {
          debugger;
          return;
        }
  
        this.getUsers();
      });
    }
  
    deleteUser(_item: Users) {
      const _title = 'User';
      const _description = 'Are you sure to permanently delete this user?';
      const _waitDesciption = 'User is deleting...';
  
      const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
      dialogRef.afterClosed().subscribe(res => {
        if (!res) {
          return;
        }
        debugger;
        this.service.deleteUser(_item.userID).pipe(
          finalize(() => {
  
          })
        ).subscribe((baseResponse) => {
          debugger;
          if (baseResponse) {
            this.layoutUtilsService.alertElement("");
            this.getUsers();
          }
          else
            this.layoutUtilsService.alertElement("");
       });
  
      });
    }
  
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
  }
  