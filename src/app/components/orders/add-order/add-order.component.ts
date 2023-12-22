import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
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
      private dialogRef: MatDialogRef<AddOrderComponent>
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
  //     }
  //     else {
  //       this.addUserForm = this.formBuilder.group({
  //         userId: [''],
  //         userName: ['', Validators.required],
  //         profileID: ['', Validators.required],
  //         userCode: ['', Validators.required],
  //         userTypeId: ['', Validators.required],
  //         cityId: ['', Validators.required],
  //         branchId: ['', Validators.required],
  //         emailAddress: ['', Validators.required],
  //         mobileNo: ['', Validators.required],
  //         address: [''],
  //         password: ['']
  //       });
  // debugger;
  //       this.headerText = "Update User";
  //       this.buttonText = "Update"
  //       this.addUserForm.controls['userId'].setValue(this.editData.user.userId);
  //       this.addUserForm.controls['userName'].setValue(this.editData.user.userName);
  //       this.addUserForm.controls['profileID'].setValue(this.editData.user.profileID);
  //       this.addUserForm.controls['userCode'].setValue(this.editData.user.userCode);
  //       this.addUserForm.controls['userTypeId'].setValue(this.editData.user.userTypeId);
  //       this.addUserForm.controls['cityId'].setValue(this.editData.user.cityId);
  //       this.addUserForm.controls['branchId'].setValue(this.editData.user.branchId);
  //       this.addUserForm.controls['emailAddress'].setValue(this.editData.user.emailAddress);
  //       this.addUserForm.controls['mobileNo'].setValue(this.editData.user.mobileNo);
  //       this.addUserForm.controls['address'].setValue(this.editData.user.address);
  //       this.addUserForm.controls['password'].setValue(this.editData.user.password);
  //     }
      // this.getProfile();
      // this.getCities();
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
  