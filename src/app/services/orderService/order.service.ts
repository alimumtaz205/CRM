import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GenericResponse } from 'src/app/_models/_DTO/Response/GenericResponse';
import { OrderResponse } from 'src/app/_models/_DTO/Response/OrderResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private API_URL = environment.API_URL + "Orders/";
  
  constructor(
    private http: HttpClient
  ) { }

  GetOrders(): Observable<GenericResponse<OrderResponse[]>> {
    return this.http.get<GenericResponse<OrderResponse[]>>(`${this.API_URL}GetOrders`)
      .pipe(map(data => <GenericResponse<OrderResponse[]>>data));
  }

  addOrders(formData: any): Observable<GenericResponse<OrderResponse[]>> {
    debugger;
    return this.http.post<GenericResponse<OrderResponse[]>>(`${this.API_URL}AddNewUser`, formData)
      .pipe(map(data => <GenericResponse<OrderResponse[]>>data));
  }
}
