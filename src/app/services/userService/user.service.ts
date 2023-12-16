import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GenericResponse } from 'src/app/_models/_DTO/Response/GenericResponse';
import { UserResponse } from 'src/app/_models/_DTO/Response/UserResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.API_URL + "Users/";
  
  constructor(
    private http: HttpClient
  ) { }

  GetUsers(): Observable<GenericResponse<UserResponse[]>> {
    return this.http.get<GenericResponse<UserResponse[]>>(`${this.API_URL}GetUser`)
      .pipe(map(data => <GenericResponse<UserResponse[]>>data));
  }

  addUser(formData: any): Observable<GenericResponse<UserResponse[]>> {
    debugger;
    return this.http.post<GenericResponse<UserResponse[]>>(`${this.API_URL}AddNewUser`, formData)
      .pipe(map(data => <GenericResponse<UserResponse[]>>data));
  }

  updateUser(formData: any): Observable<GenericResponse<UserResponse[]>> {
    debugger;
    var user_request = {
      userId: formData.userId,
      userName: formData.userName,
      profileID: formData.profileID,
      userCode: "string",
      emailAddress: formData.emailAddress,
      mobileNo: formData.mobileNo,
      userTypeId: formData.userTypeId,
      cityId: formData.cityId,
      BranchId: formData.branchId,
      address: formData.address
    }

    return this.http.post<GenericResponse<UserResponse[]>>(`${this.API_URL}UpdateUser`, user_request)
      .pipe(map(data => <GenericResponse<UserResponse[]>>data));
  }

  deleteUser(formData: any): Observable<any[]> {
    debugger;
    var request = {
      userId: formData
    }
    return this.http.post<any[]>(`${this.API_URL}DeleteUser`, request)
      .pipe(map(data => <any[]>data));
  }

  GetUserRoles(): Observable<GenericResponse<UserResponse[]>> {
    return this.http.get<GenericResponse<UserResponse[]>>(`${this.API_URL}GetUserRole`)
      .pipe(map(data => <GenericResponse<UserResponse[]>>data));
  }
}
