import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _authService:AuthService) {
  }

  //Created this service since the standard provided with the adal library doesn't redirect 
  //to a new login sequence when not logged in and surfing towards a protected link/page => now it does for this library as well :)
  canActivate(): boolean {
    if(this._authService.isAuthenticated()) {
      return true;
   }
   this._authService.login();
    return false;
  }

}