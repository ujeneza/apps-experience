import { Injectable, OnInit } from '@angular/core';
//import { Adal5HTTPService, Adal5Service, Adal5User } from 'adal-angular5';
//import { JwtHelper } from 'angular2-jwt';
import { AdalService } from 'adal-angular4';
import { environment } from 'src/environments/environment';
//import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  ngOnInit(): void {
  }

  private _user = null;
  private _name = '';
  //private cachedRequests: Array<HttpRequest<any>> = [];
  
  constructor(private adalService: AdalService) {
     this.adalService.init(environment.adalConfig);
     this.registerForSuccesfullyLogin();
  }
  
  public signout():void {
     this.adalService.logOut();
  }
  
  public login():void {
     this.adalService.login();
  }
  
  public getName():string {
    if(this._name != ''){
      return this._name;
    }
    return "Nobody";
  }

  public getUser(): any {
  return this.adalService.userInfo;
  }

  // public collectFailedRequests(request): void {
  //   this.cachedRequests.push(request);
  // }

  // public retryFailedRequests(newToken): void {
  //   this.cachedRequests.forEach(request => {
  //     request = request.clone({
  //       setHeaders: {
  //           Authorization: `Bearer ${ newToken }`
  //       }
  //     });
  //   });
  //   this.cachedRequests = [];
  // }
  
  public registerForSuccesfullyLogin():void {
    this.adalService.handleWindowCallback();
    this.adalService.getUser().subscribe(user => 
      this.completeAuthentication(user)
    );
  }

  private completeAuthentication(user: any):void {
    if (user){
      this._user = user;
      var expireIn = user.profile.exp - new Date().getTime();
      var userInfo = this.adalService.userInfo;
      // console.log('**********************************************************************');
      // console.log('**********************************************************************');
      // console.log('**********************************************************************');
      // console.log({userInfo});
      localStorage.setItem('token', userInfo.token);
      // console.log({user});
      // console.log('**********************************************************************');
      // console.log('**********************************************************************');
      // console.log('**********************************************************************');
      this._name = user.profile.name;
      //this.retryFailedRequests(userInfo.token);
    }
  }



  public isAuthenticated(): boolean {
    return this.adalService.userInfo.authenticated;
  }

  public isAllowedByRole(roleNeeded: string): boolean{
    if(this.adalService.userInfo.authenticated){
      console.log('RoleCheck:'+this._name+' ','Checking the roles.. (user is authenticated)')
      switch(roleNeeded){
        case "SIPDiPAdmin": 
              if(this.adalService.userInfo.profile.roles[0]===roleNeeded){return true;}
              break;
        case "SIPDiPCorrector":
              if(this.adalService.userInfo.profile.roles[0]===roleNeeded
                ||this.adalService.userInfo.profile.roles[0]==="SIPDiPAdmin"){return true;}
              break;
        case "SIPDiPViewer":
              if(this.adalService.userInfo.profile.roles[0]===roleNeeded
                ||this.adalService.userInfo.profile.roles[0]==="SIPDiPAdmin"
                ||this.adalService.userInfo.profile.roles[0]==="SIPDiPCorrector"){return true;}
              break;
        default: 
              return false;
              break;
      }
    }
    console.log('RoleCheck:'+this._name+' ','FAILED!!! (user is NOT authenticated)')
    return false;
  }


}
