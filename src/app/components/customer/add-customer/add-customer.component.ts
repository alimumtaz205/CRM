import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
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
      private dialogRef: MatDialogRef<AddCustomerComponent>
    ) { }
  
    ngOnInit(): void {
      debugger;
  //     if (this.editData.user.userId == null || this.editData.user.userId == undefined) {
  
        this.headerText = "Add User";
        this.buttonText = "Add"
  
        this.addUserForm = this.formBuilder.group({
          productType: ['', Validators.required],
          orderDetails: ['', Validators.required],
          company: ['', Validators.required],
          policyNo: ['', Validators.required],
          coverage: ['', Validators.required],
          insuranceName: ['', Validators.required],
          assignedAgent: ['', Validators.required],
          referalChannel: ['', Validators.required],
          referalId: ['', Validators.required],
          status: ['', Validators.required],
          lastContacted: ['', Validators.required]
        });
    }
  
  
    hasError(controlName: string, errorName: string): boolean {
      return this.addUserForm.controls[controlName].hasError(errorName);
    }
  
    getProfile() {
      // this.profileService.GetProfiles().subscribe((resp) => {
      //   if (resp.isSuccessful) {
      //     this.profileListModel = resp.data;
      //   }
      //   else {
      //     debugger;
      //   }
      // });
    }
  
    getCities() {
      // this.countryService.getCities().subscribe((resp) => {
      //   if (resp.isSuccessful) {
      //     debugger
      //     this.cityListModel = resp.data;
      //   }
      //   else {
      //     debugger;
      //   }
      // });
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
        
          this.addUserForm.reset();
          this.dialogRef.close('add');
        }
        else {
          debugger;
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
             
              this.addUserForm.reset();
              this.dialogRef.close('update');
            }
            else {
              debugger;
             
            }
          }
        });
    }
  
    changeClient(data: any) {
      debugger;
      //this.selected_country_id = data.id;
      //this.getUniversities(data.id);
    }
  
    changeClientCity(data: any) {
      debugger;
      this.selected_country_id = data;
    }
  
    changeClientBranch(data: any) {
      debugger;
      //this.selected_country_id = data.id;
      //this.getUniversities(data.id);
    }
  
    closeModel(){

    }
  }
  