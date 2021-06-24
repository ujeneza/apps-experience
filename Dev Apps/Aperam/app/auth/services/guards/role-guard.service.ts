import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(private _authService:AuthService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const neededRole = route.data.neededRole;
    if (this._authService.isAllowedByRole(neededRole)) {
      return true;
    }
    this.router.navigate(['notauthorized']);
    return true;
  }





}