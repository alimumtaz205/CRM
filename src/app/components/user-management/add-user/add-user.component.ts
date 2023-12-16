import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public headerText: any = "Add User";
  public buttonText: any = "Add"
  selected_country = 'none';
  selected_course = 'none';
  selected_subject = 'none';
  lovType: string = "1";
  selected_country_id:number = 0;
  control: any;
  hasFormErrors = false;
  error: any;
  university_name: any;
  university_description: any;
  profileListModel: any[] = [
  ];
  UsertypesListModel: any[] = [
  ];
  UserStatusListModel:any[]=[];
  userListModel: any[] = [
  ];
  cityListModel: any[] = [];
  branchListModel: any[] = [];
  addUserForm!: FormGroup
  displayedColumns: string[] = ['']

  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<AddUserComponent>
  ) { }

  ngOnInit(): void {
    debugger;

    this.UsertypesListModel =  [
      {
        "userTypeId": 1,
        "userTypeName": "Admin"
      },
      {
        "userTypeId": 2,
        "userTypeName": "Supervoiser"
      },
      {
        "userTypeId": 3,
        "userTypeName": "Agent"
      },
      {
        "userTypeId": 4,
        "userTypeName": "Customer"
      }
    ]

    this.UserStatusListModel =  [
      {
        "userTypeId": 1,
        "userStatusName": "Active"
      },
      {
        "userTypeId": 2,
        "userStatusName": "InActive"
      }
    ]
    if (this.editData.user.userId == null || this.editData.user.userId == undefined) {

      this.headerText = "Add User";
      this.buttonText = "Add"

      this.addUserForm = this.formBuilder.group({
        userName: ['', Validators.required],
        profileID: ['', Validators.required],
        userCode: ['', Validators.required],
        userTypeId: ['', Validators.required],
        cityId: ['', Validators.required],
        branchId: ['', Validators.required],
        emailAddress: ['', Validators.required],
        mobileNo: ['', Validators.required],
        address: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
    else {
      this.addUserForm = this.formBuilder.group({
        userId: [''],
        userName: ['', Validators.required],
        profileID: ['', Validators.required],
        userCode: ['', Validators.required],
        userTypeId: ['', Validators.required],
        cityId: ['', Validators.required],
        branchId: ['', Validators.required],
        emailAddress: ['', Validators.required],
        mobileNo: ['', Validators.required],
        address: [''],
        password: ['']
      });
debugger;
      this.headerText = "Update User";
      this.buttonText = "Update"
      this.addUserForm.controls['userId'].setValue(this.editData.user.userId);
      this.addUserForm.controls['userName'].setValue(this.editData.user.userName);
      this.addUserForm.controls['profileID'].setValue(this.editData.user.profileID);
      this.addUserForm.controls['userCode'].setValue(this.editData.user.userCode);
      this.addUserForm.controls['userTypeId'].setValue(this.editData.user.userTypeId);
      this.addUserForm.controls['cityId'].setValue(this.editData.user.cityId);
      this.addUserForm.controls['branchId'].setValue(this.editData.user.branchId);
      this.addUserForm.controls['emailAddress'].setValue(this.editData.user.emailAddress);
      this.addUserForm.controls['mobileNo'].setValue(this.editData.user.mobileNo);
      this.addUserForm.controls['address'].setValue(this.editData.user.address);
      this.addUserForm.controls['password'].setValue(this.editData.user.password);
    }
  }


  hasError(controlName: string, errorName: string): boolean {
    return this.addUserForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    debugger;
    if (!this.addUserForm.valid) {

      this.hasFormErrors = false;
      if (this.addUserForm.invalid) {
        const controls = this.addUserForm.controls;
        Object.keys(controls).forEach(controlName =>
          controls[controlName].markAsTouched()
        );

        this.hasFormErrors = true;
        return;
      }
    }
    else {
      if (this.editData.user.userId == null || this.editData.user.userId == undefined) {
        this.addUser();
      }
      else {
        debugger;
        this.updateUser();
      }
    }
  }


  addUser() {
    debugger;
    var formData = {
      userName: this.addUserForm.value.userName,
      profileID: this.addUserForm.value.profileID,
      userCode: this.addUserForm.value.userCode,
      userTypeId: this.addUserForm.value.userTypeId,
      cityId: this.addUserForm.value.cityId,
      branchId: this.addUserForm.value.branchId,
      emailAddress: this.addUserForm.value.emailAddress,
      mobileNo: this.addUserForm.value.mobileNo + "",
      address: this.addUserForm.value.address,
      password: this.addUserForm.value.password,
    }

    this.userService.addUser(formData).subscribe((resp) => {
      if (resp.isSuccess) {
        this.userListModel = resp.data;
        this.toastr.success('user added successfully', 'Success!');
        this.addUserForm.reset();
        this.dialogRef.close('add');
      }
      else {
        debugger;
        this.toastr.error(resp.message, 'An error occured!');
      }
    });
  }


  updateUser() {
    debugger;
    var formData = {
      userId: this.addUserForm.value.userId,
      userName: this.addUserForm.value.userName,
      profileID: this.addUserForm.value.profileID,
      userCode: this.addUserForm.value.userCode,
      userTypeId: this.addUserForm.value.userTypeId,
      cityId: this.addUserForm.value.cityId,
      branchId: this.addUserForm.value.branchId,
      emailAddress: this.addUserForm.value.emailAddress,
      mobileNo: this.addUserForm.value.mobileNo,
      address: this.addUserForm.value.address
      //password: this.addUserForm.value.password,
    }
    this.userService.updateUser(formData)
      .subscribe({
        next: (resp) => {
          if (resp.isSuccess) {
            this.profileListModel = resp.data;
            this.toastr.success('user updated successfully', 'Success!');
            this.addUserForm.reset();
            this.dialogRef.close('update');
          }
          else {
            debugger;
            this.toastr.error(resp.message, 'An error occured!');
          }
        }
      });
  }

  changeClient(data: any) {
    debugger;
    //this.selected_country_id = data.id;
    //this.getUniversities(data.id);
  }

  changeClientBranch(data: any) {
    debugger;
    //this.selected_country_id = data.id;
    //this.getUniversities(data.id);
  }

  closeModel() {
  
  }
}
