import { Component } from '@angular/core';
// import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    // this.adal.init(this.adalConfig);
  }

  // title = 'SIPDiP-UI';
  // private url = new URL("auth-callback", "http://localhost:4200");

  // private adalConfig = {
  //   tenant: '26845d4f-0cf4-4d08-b717-06b6b7824ec4',
  //   clientId: '7c79ccfa-d051-4c29-aa5f-c79d2f1e9f7f', 
  //   prompt: 'login',
  //   redirectUri: this.url.href,
  //   postLogoutRedirectUri: "http://localhost:4200",
  //   endpoints: {
  //     "http://localhost:44341/api/": "5165bb15-09c1-4176-a3b8-42be59c699ad"
  //   } 
    //     endpoints: {
    //   "https://login.microsoftonline.com/26845d4f-0cf4-4d08-b717-06b6b7824ec4/oauth2/token": "5165bb15-09c1-4176-a3b8-42be59c699ad"
    // } 
    
  // }
 
  // signOut(): void {
  //   this.adal.logOut();
  // }



}
