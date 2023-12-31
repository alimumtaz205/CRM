import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private route: Router) { }
  canActivate(): boolean {


    if (!this.authService.gettoken()) {
      this.route.navigateByUrl("/login");
    }
    return this.authService.gettoken();
  }
  
}
