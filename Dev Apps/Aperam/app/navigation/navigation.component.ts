import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterContentInit {

  isAuthenticatedBoolean:boolean = false;
  wikiUrl="https://sites.google.com/s/1UYS8KGfADHD5jnhS3-Pn6wgPUD5qzLwm/p/1-Jr2Gd_iHaQm1oPWc7RC5kpE0YLLhvL-/edit"

  ngAfterContentInit(): void {
    this._authService.getUser();
    if(this._authService.isAuthenticated){
    this.name = this._authService.getName();
    }
  }

  name:string="";
  selectedItem: any;
  id: any;
  // roleSelected = "Viewer";

  constructor(private _authService:AuthService) {
    // localStorage.setItem('role', this.roleSelected);

  }

  public signin():void {
    this._authService.login();
    // console.log('ROLE= ', this.roleSelected);
  }

  public signout():void {
    this._authService.signout();
  }

  public isAllowedByRole(roleNeeded: string): boolean{
    return this._authService.isAllowedByRole(roleNeeded);
  }

  public updateIsAuthenticated(): boolean {
    if(this._authService.getName() != 'Nobody' && this._authService.getName() != ''){
      this.isAuthenticatedBoolean = true;
      return true;
    }
    this.isAuthenticatedBoolean = false;
    return false;
  }
  public isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }

  public isNotAuthenticated(): boolean {
    if(this.updateIsAuthenticated()===false){
      return true;
    }
    return false;
  }


}
