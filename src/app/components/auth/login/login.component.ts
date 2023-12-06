import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //faLock = faLock;
  retUrl: any;
  loginForm!: FormGroup;
 
  constructor(
     private auth: AuthService, 
     private router: Router,
     private activatedRoute: ActivatedRoute,
     private formBuilder: FormBuilder,
     //private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.initLoginForm();
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.get('retUrl');
        console.log('LoginComponent/ngOnInit ' + this.retUrl);
      });
  }

  initLoginForm() {

    this.loginForm = this.formBuilder.group({
      username: [
        '', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
      password: [
        null,
        Validators.compose([
          Validators.required
        ])
      ],
    });
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onSubmit(): void {
    debugger;
    const controls = this.loginForm.controls;
    if (this.loginForm.invalid) {
      debugger
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    else{
      const authData = {
        username: controls['username'].value,
        password: controls['password'].value,
      };
      if(authData.username == "Admin" && authData.password == "Admin")
      {
        this.router.navigate(['/dashboard']);
      }
      else{
         // this.toastr.error('Invalid Username or password', 'Error!');
      }
    }
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }
}
