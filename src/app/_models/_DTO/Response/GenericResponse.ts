import { HttpStatusCode } from "@angular/common/http";

export interface GenericResponse<T> {
  code(arg0: string, message: string, code: any): unknown;
  isSuccess: boolean;
  resCode: HttpStatusCode;
  message: string;
  data: any;
}